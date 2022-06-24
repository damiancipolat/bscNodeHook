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

/*
const a = [
    {
        blockNumber: '20462806',
        timeStamp: '1656031157',
        hash: '0xa037810b97dfdd9da35813466a892239b3f7e6244637a88641fc4768d86ff787',
        nonce: '0',
        blockHash: '0xda10481f98cdd3bd6b5e94745832c076697608f719c623bfb67a697fcc75a024',
        transactionIndex: '2',
        from: '0x3299fa6b5751e40767a990c79d8d55efdf9ecb20',
        to: '0x02dfbec9818f37097691bab9b28ac66174297753',
        value: '10000000000000000',
        gas: '21000',
        gasPrice: '19008000000',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '1438391',
        gasUsed: '21000',
        confirmations: '14503'
      }
];

const b = [{
    blockNumber: '20462806',
    timeStamp: '1656031157',
    hash: '0xa037810b97dfdd9da35813466a892239b3f7e6244637a88641fc4768d86ff787',
    nonce: '0',
    blockHash: '0xda10481f98cdd3bd6b5e94745832c076697608f719c623bfb67a697fcc75a024',
    transactionIndex: '2',
    from: '0x3299fa6b5751e40767a990c79d8d55efdf9ecb20',
    to: '0x02dfbec9818f37097691bab9b28ac66174297753',
    value: '10000000000000000',
    gas: '21000',
    gasPrice: '19008000000',
    isError: '0',
    txreceipt_status: '1',
    input: '0x',
    contractAddress: '',
    cumulativeGasUsed: '1438391',
    gasUsed: '21000',
    confirmations: '14503'
  },
  {
    blockNumber: '20462884',
    timeStamp: '1656031391',
    hash: '0x5f2641df77514ddeeca5f9520884c89507dae5ae3885d2ba6582b507ab6b22f4',
    nonce: '0',
    blockHash: '0x74d3491f3505828672ed55f6bd2e01819449ceaa04511bdbc15273a2dd9dc073',
    transactionIndex: '0',
    from: '0x02dfbec9818f37097691bab9b28ac66174297753',
    to: '0x3b683b76919f4ef84e089c9693ee74dc0f3d5b06',
    value: '1000000000000000',
    gas: '21000',
    gasPrice: '19008000000',
    isError: '0',
    txreceipt_status: '1',
    input: '0x',
    contractAddress: '',
    cumulativeGasUsed: '21000',
    gasUsed: '21000',
    confirmations: '14425'
  }];

//Analize is exist a hast list,
const existHash = (hash,txList)=>txList.filter(tx=>tx.hash==hash).length>0;

const differences = b.filter(tx=>!existHash(tx.hash,a));

console.log(differences);

//console.log(existHash('0x5f2641df77514ddeeca5f9520884c89507dae5ae3885d2ba6582b07ab6b22f4',a));
*/