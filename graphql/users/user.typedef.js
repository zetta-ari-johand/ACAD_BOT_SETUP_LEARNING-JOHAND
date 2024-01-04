const { gql } = require('apollo-server-express');

const userTestingTypeDef = gql`
  type Description {
    _id: ID
    description: HelloTesting
  }
  extend type Query {
    UserTesting: [Description]
  }

  extend type Mutation {
    mutationUserForTesting: String
  }
`;

module.exports = userTestingTypeDef;
