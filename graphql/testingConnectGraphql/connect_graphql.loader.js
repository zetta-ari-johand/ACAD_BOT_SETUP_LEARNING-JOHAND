const DataLoader = require('dataloader');
const ConnectGraphqlModel = require('./connect_graphql.model'); // Replace with the actual path to your model

const testingConnectGraphqlLoader = async (ids) => {
  const connectGraphql = await ConnectGraphqlModel.find({ _id: { $in: ids } }).lean();

  const connectGraphqlMap = new Map();
  connectGraphql.forEach((testingConnectGraphql) => {
    connectGraphqlMap.set(testingConnectGraphql._id.toString(), testingConnectGraphql);
  });

  return ids.map((id) => connectGraphqlMap.get(id.toString()));
};

exports.TestingConnectGraphql = () => new DataLoader(testingConnectGraphqlLoader);
