const cron = require('node-cron');
/*
const EventEmitter = require('events');
const { setInterval } = require('timers/promises');
const events = new EventEmitter();
*/
/*
events.on('onChange', () => {
    console.log('started');
});

events.on('onScan', () => {
    console.log('started');
});

eventEmitter.emit('start', 23);
*/

const watchList = require('../infraestructure/config/address');

/*
setInterval(1000,()=>{
    console.log('22222222222222')
});*/


cron.schedule('10 * * * *', () => {
    console.log('running every minute 1, 2, 4 and 5');
  });