const { trigger } = require('../../cron/index');
const ConnectGraphqlModel = require('./connect_graphql.model');

async function HelloTesting(parent, context) {
  // await ConnectGraphqlModel.create({ description: 'Hello Word database' });
  return 'Hello world!';
}

async function mutationForTesting(parent, context) {
  return 'Hello world for mutation testing purpose';
}

async function triggerCronJob(parent, { cronName }, context) {
  try {
    const result = await trigger(cronName);
    return `Cron job '${cronName}' triggered successfully. Result: ${result}`;
  } catch (error) {
    console.error(`Error triggering cron job '${cronName}':`, error);
    throw new Error(`Failed to trigger cron job '${cronName}'.`);
  }
}

module.exports = {
  Query: {
    HelloTesting,
  },
  Mutation: {
    mutationForTesting,
    triggerCronJob,
  },
};
