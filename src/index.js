const config = require('./infraestructure/config');
const analizer = require('./events/txAnalizer');
const cron = require('node-cron');
const store = require('./infraestructure/store/');
const api = require('./infraestructure/bscApi');
const watchList = require('./infraestructure/config/address');
const address = require('./infraestructure/config/address');

const EventEmitter = require('events');
const events = new EventEmitter();

const {
    onScan
} = require('./events/onScan');

events.on('onScan', onScan);

const processate = async ()=>{

    address.forEach(elem=>{
        events.emit('onScan',{address:elem})
    });
    
}

cron.schedule('*/10 * * * * *', () => {
    console.log('running 10 secondse');
    processate();
});

/*

    /*
    for (let i=0;i<=address.length-1;i++){

        const addressToCheck = address[i];

        
    }*/


/*

const in_tx = {
    "blockNumber":"20462389",
    "timeStamp":"1656029906",
    "hash":"0x3256866331da086caec627d5fe40241ecb9e597646f77841c2e934efe360a90b",
    "nonce":"5202754",
    "blockHash":"0x4e308c2ea5a09bd6fd4782b767ff5cc824201151a98b4750ebf73b319d818e16",
    "transactionIndex":"3",
    "from":"0x3299fa6b5751e40767a990c79d8d55efdf9ecb20",
    "to":"0xaa25aa7a19f9c426e07dee59b12f944f4d9f1dd3",    
    "value":"200000000000000000",
    "gas":"21000",
    "gasPrice":"18000000000",
    "isError":"0",
    "txreceipt_status":"1",
    "input":"0x",
    "contractAddress":"",
    "cumulativeGasUsed":"1616978",
    "gasUsed":"21000",
    "confirmations":"378"
};

const out_tx_1 = {
    "blockNumber":"20462389",
    "timeStamp":"1656029906",
    "hash":"0x3256866331da086caec627d5fe40241ecb9e597646f77841c2e934efe360a90b",
    "nonce":"5202754",
    "blockHash":"0x4e308c2ea5a09bd6fd4782b767ff5cc824201151a98b4750ebf73b319d818e16",
    "transactionIndex":"3",
    "to":"0x3299fa6b5751e40767a990c79d8d55efdf9ecb20",
    "from":"0xaa25aa7a19f9c426e07dee59b12f944f4d9f1dd3",    
    "value":"200000000000000000",
    "gas":"21000",
    "gasPrice":"18000000000",
    "isError":"0",
    "txreceipt_status":"1",
    "input":"0x",
    "contractAddress":"",
    "cumulativeGasUsed":"1616978",
    "gasUsed":"21000",
    "confirmations":"378"
};

const out_tx_2 = {
    "blockNumber":"20462389",
    "timeStamp":"1656029906",
    "hash":"0x3256866331da086caec627d5fe40241ecb9e597646f77841c2e934efe360a90b",
    "nonce":"5202754",
    "blockHash":"0x4e308c2ea5a09bd6fd4782b767ff5cc824201151a98b4750ebf73b319d818e16",
    "transactionIndex":"3",
    "to":"0x3299fa6b5751e40767a990c79d8d55efdf9ecb20",
    "from":"0xaa25aa7a19f9c426e07dee59b12f944f4d9f1dd223",    
    "value":"200000000000000000",
    "gas":"21000",
    "gasPrice":"18000000000",
    "isError":"0",
    "txreceipt_status":"1",
    "input":"0x",
    "contractAddress":"",
    "cumulativeGasUsed":"1616978",
    "gasUsed":"21000",
    "confirmations":"378"
};

const address='0x3299fa6b5751e40767a990c79d8d55efdf9ecb20';

console.log(analizer.analizeChanges(address,[in_tx],[in_tx,out_tx_1,out_tx_2]));
*/

/*

console.log(analizer.clasiffy(address,[in_tx,out_tx_1,out_tx_2]));

console.log(analizer.checkOrigin(address,mock));
const store = require('./infraestructure/store');
store.save('a',1);
store.save('a',2);
store.save('a',3);

console.log(store.get('a'));

store.update('a',[111,222]);
console.log(store.get('a'));

store.save('b',3);
console.log(store.getAll('b'));

store.remove('b');
console.log(store.getAll('b'));
*/

/*
const {
    getBalance,
    getTransactions
} = require('./infraestructure/bscApi/');

getTransactions('0x3299fa6B5751E40767A990c79D8D55efDf9ECB20').then(a=>console.log(a));
*/