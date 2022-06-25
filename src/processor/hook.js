const {
    hook
} = require('../infraestructure/config/');

const dispatch = async (txList)=>{

    for (let i=0;i<=txList.length-1;i++){
        const tx = txList[i];
        await launch(tx);
    }

}

const launch = async (tx)=>{

    const url = `${hook}/url/${tx}`;
    const res = await axios.get(url);

    const {
        status,
        data
    } = res;
    
    if (status!='200')
        throw {status,error:'request error',url};
    
    return data;

}

module.exports={
    dispatch,
    launch
};

