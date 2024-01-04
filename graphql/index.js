const { gql } = require('apollo-server-express');
const { merge } = require('lodash');
const HelloTesting = require('./testingConnectGraphql');
const UserTesting = require('./users');

const typeDef = gql`
  type Query
  type Mutation
`;

const typeDefs = [typeDef, HelloTesting.typeDef, UserTesting.typeDef];

let resolvers = {};

resolvers = merge(resolvers, HelloTesting.resolver, UserTesting.resolver);

module.exports = {
  typeDefs,
  resolvers,
};
