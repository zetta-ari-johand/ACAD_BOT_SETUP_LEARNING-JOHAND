const CronJob = require('cron').CronJob;

function dummyCronJob() {
  console.log('Dummy cron job is running...');
}

// Define cron schedule
const cronSchedule = '*/5 * * * * *';

// Create a cron job with the dummy function and schedule
const cronJob = new CronJob(cronSchedule, dummyCronJob);

// Expose a start function
function startCronJob() {
  cronJob.start();
  console.log('Cron job started.');
}

function stopCronJob() {
  cronJob.stop();
  console.log('Cron job stopped.');
}

async function trigger(cronName) {
  return new Promise((resolve, reject) => {
    // Start the cron job when trigger is called
    startCronJob();

    const resultMessage = `Cron job '${cronName}' triggered.`;
    console.log(resultMessage);
    resolve(resultMessage);
  });
}

module.exports = {
  startCronJob,
  stopCronJob,
  trigger,
};
