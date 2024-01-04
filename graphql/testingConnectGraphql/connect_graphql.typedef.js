const { gql } = require('apollo-server-express');

const testingTypeDef = gql`
  type HelloTesting {
    _id: ID
    description: String
  }
  extend type Query {
    HelloTesting: String
  }

  extend type Mutation {
    mutationForTesting: String
    triggerCronJob(cronName: String!): String
  }
`;

module.exports = testingTypeDef;
