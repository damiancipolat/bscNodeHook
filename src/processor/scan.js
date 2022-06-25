const store = require('../infraestructure/store');

const {
    getTransactions
} = require('../infraestructure/bscApi/');

const {
    differences
} = require('./util');

const {
    dispatch
} = require('./hook');

//Determine a in/out format.
const checkOrigin = (address,trx)=>{

    const {
        to,
        from
    } = trx;

    if (address===to)
        return 'IN';
    
    if (address===from)
        return 'OUT';
    
    return null;

}

//Analize a custom address.
const scanAddress = async (address)=>{

    //Get the transactions from store.
    const storedTx = store.get(address);

    //Get the transactions from the bscapi.
    const bscTx = await getTransactions(address);

    //Analize the differences.
    const diffTx = differences((storedTx||[]),bscTx);

    //Incoming transactions.
    const incomingTx = diffTx.filter(eTx=>checkOrigin(address,eTx)==='IN');

    //if there are differeces, update it.
    if (incomingTx.length>0){
        console.log(`> Detected ${incomingTx.length} changes on address: ${address}`);
        store.save(address,incomingTx);

        console.log(`> Emit hook for address: ${address}`);
        await dispatch(incomingTx);

    }else{
        console.log(`> No differences detected in address: ${address}`);
    }

};

module.exports={
    scanAddress
};