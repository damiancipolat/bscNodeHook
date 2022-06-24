const config = require('./infraestructure/config');

const {
    getBalance
} = require('./infraestructure/bscApi/');

getBalance('0x3299fa6B5751E40767A990c79D8D55efDf9ECB20').then(a=>console.log(a));

