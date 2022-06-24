const same = (a,b)=> a.every(elem=>b.includes(elem));

//Classify in in/out transactions.
const clasiffy = (address,compareTxs)=>{
    
    const outTx =  compareTxs.filter(tx=>checkOrigin(address,tx)==='OUT');
    const inTx  =  compareTxs.filter(tx=>checkOrigin(address,tx)==='IN');

    return {
        out:outTx,
        in:inTx
    };

}

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

//Compare the arrays and classify by status.
const analizeChanges = (address,trxStored,trxResponseArray)=>{

    //If both are equals.
    if (same(trxStored,trxResponseArray)&&same(trxResponseArray,trxStored)){
        return {
            status:'mismatch'
        };
    }

    //If both are empty.
    if (
        (trxStored&&Array.isArray(trxStored)&&trxStored.length==0)&&
        (trxResponseArray&&Array.isArray(trxResponseArray)&&trxResponseArray.length==0)
    ){
        return {
            status:'no-data'
        };
    }

    //Classiffy transactions.
    const classified = clasiffy(address, trxResponseArray);

    //If the firts has no data.
    if (trxStored&&Array.isArray(trxStored)&&trxStored.length==0){
        return {
            status:'empty-data',
            ...classified
        };
    }

    //If the second has data
    if (trxResponseArray&&Array.isArray(trxResponseArray)&&trxResponseArray.length!=0){
        return {
            status:'new-data',
            ...classified
        };
    }

    return null;
        
}

module.exports={
    analizeChanges,
    checkOrigin,
    same,
    clasiffy
};