const { trigger } = require('../../cron/index');
const UserModel = require('./user.model');

async function UserTesting(parent, context) {
  // await UserModel.create({ description: '659630a0e7b9ae4bbc6439a8' });
  const getData = await UserModel.find({});
  return getData;
}

async function mutationUserForTesting(parent, context) {
  return 'Hello world for mutation testing purpose';
}

async function description(parent, args, context) {
  if (parent.description) {
    return await context.loaders.TestingConnectGraphql.load(parent.description);
  }
  return null;
}

module.exports = {
  Query: {
    UserTesting,
  },
  Mutation: {
    mutationUserForTesting,
  },
  Description: {
    description,
  },
};
