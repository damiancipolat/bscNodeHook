const config = require('./infraestructure/config');

const store = require('./infraestructure/store');


store.save('a',1);
store.save('a',2);
store.save('a',3);

console.log(store.get('a'));

store.update('a',[111,222]);

console.log(store.get('a'));
/*
const {
    getBalance,
    getTransactions
} = require('./infraestructure/bscApi/');

getTransactions('0x3299fa6B5751E40767A990c79D8D55efDf9ECB20').then(a=>console.log(a));
*/