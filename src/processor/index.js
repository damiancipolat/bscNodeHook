const addressWatchList = require('../infraestructure/config/address');

const {
    scanAddress
} = require('./scan');

//Process the address.
const start = async ()=>{

    for (let i=0;i<=addressWatchList.length-1;i++){

        const address = addressWatchList[i];
        console.log(`> Process address: ${address}`);

        await scanAddress(address);

    }

}

module.exports={
    start
};