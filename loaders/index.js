const { TestingConnectGraphql } = require('../graphql/testingConnectGraphql/connect_graphql.loader');

module.exports = {
  loaders: () => {
    return {
      TestingConnectGraphql: TestingConnectGraphql(),
    };
  },
};
