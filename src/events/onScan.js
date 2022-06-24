const store = require('../infraestructure/store/');
const api = require('../infraestructure/bscApi');
const analizer = require('./txAnalizer');

const onScan = async (event)=>{

    console.log('onScan - received event',event);

    const {
        address
    } = event;    

    //Get transactions from store.
    let trxStored = store.get(address);

    if (!trxStored){
        store.save(address,[]);
        trxStored = [];
    }            

    //Get transcation from bscscan api,
    const trxResponse = await api.getTransactions(address);      

    //Analize.
    const result = analizer.analizeChanges(address,trxStored,trxResponse.result);

    if (result&&result.status.includes('new-data','empty-data')){
        store.save(address,result.in);
    }

    //Notify on scan.
    console.log('>>>',address,'++',result);

}

module.exports={
    onScan
};