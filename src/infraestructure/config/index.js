//Load env.
require('dotenv').config();

const config = {
    bscApi:{
        host:process.env.BSC_API_URL,
        token:process.env.BSC_API_TOKEN
    },
    cronExpression:process.env.TIMER_INTERVAL    
};

module.exports = {
    ...config
};