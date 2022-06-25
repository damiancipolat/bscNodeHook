const {
    hook
} = require('../infraestructure/config/');

const launch = (tx)=>{

    const url = `${hookt}/url/${tx}`;
    const res = await axios.get(url);

    const {
        status,
        data
    } = res;
    
    if (status!='200')
        throw {status,error:'request error',url};
    
    const {
        result
    }=data;
    
    return result;


}

module.exports={
    launch
};

