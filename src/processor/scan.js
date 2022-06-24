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
    
    //if there are differeces, update it.
    if (differences.length>0){
        console.log(`> Detected ${differences.length} changes on address: ${address}`);
        store.save(address,diffTx);
        console.log('*-***',store.getAll());
    }else{
        console.log(`> No differences detected in address: ${address}`);
    }

};

module.exports={
    scanAddress
};