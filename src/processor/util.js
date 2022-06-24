//Analize is exist a hast list,
const existHash = (hash,txList)=>txList.filter(tx=>tx.hash==hash).length>0;

//FInd differences in transactions.
const differences = (a,b)=>b.filter(tx=>!existHash(tx.hash,a));

module.exports={
    differences
};