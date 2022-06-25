const store = require('../infraestructure/store');

const {
    getTransactions
} = require('../infraestructure/bscApi/');

const {
    differences
} = require('./util');

//Analize a custom address.
const scanAddress = async (address)=>{

    //Get the transactions from store.
    const storedTx = store.get(address);

    //Get the transactions from the bscapi.
    const bscTx = await getTransactions(address);

    //Analize the differences.
    const diffTx = differences((storedTx||[]),bscTx);
    console.log('> Differences found',diffTx,'-----',diffTx.length);

    //if there are differeces, update it.
    if (diffTx.length>0){
        console.log(`> Detected ${diffTx.length} changes on address: ${address}`);
        store.save(address,diffTx);
        console.log('----->',diffTx);
    }else{
        console.log(`> No differences detected in address: ${address}`);
    }

};

module.exports={
    scanAddress
};