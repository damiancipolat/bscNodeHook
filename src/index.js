const cron = require('node-cron');

const {
    start
} = require('./processor');

const {
    cronExpression
} = require('./infraestructure/config/');


//Create a cron process.
cron.schedule(cronExpression, async () => {
  console.log(`> Running cron: ${cronExpression}`);
  await start();
});