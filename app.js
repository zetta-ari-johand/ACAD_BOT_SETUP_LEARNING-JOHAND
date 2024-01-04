'use strict';

require('dotenv').config();
require('./utils/database');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');

const { makeExecutableSchema } = require('graphql-tools');
const { applyMiddleware } = require('graphql-middleware');
const { typeDefs, resolvers } = require('./graphql');
const { loaders } = require('./loaders/index');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const executableSchema = makeExecutableSchema({ typeDefs, resolvers });
const protectedSchema = applyMiddleware(
  executableSchema
  // authMiddleware
);
const cron = require('./cron');

const server = new ApolloServer({
  schema: protectedSchema,
  debug: process.env.APOLLO_SERVER_DEBUG === 'true',
  playground: process.env.APOLLO_SERVER_PLAYGROUND === 'true',
  introspection: true,
  formatError: (err) => {
    return err;
  },
  formatResponse: (response, requestContext) => {
    if (requestContext.response && requestContext.response.http) {
      requestContext.response.http.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      requestContext.response.http.headers.set('Pragma', 'no-cache');
      requestContext.response.http.headers.set('Expires', '0');
      requestContext.response.http.headers.set('X-Content-Type-Options', 'nosniff');
    }

    return response;
  },
  context: (req) => ({
    req: req.req,
    loaders: loaders(),
  }),
});

// start CRON JOB 2 second after server started
setTimeout(() => {
  cron.startCronJob();
}, 2000);

server.applyMiddleware({ app });

module.exports = app;
