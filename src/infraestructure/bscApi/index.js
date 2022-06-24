const axios = require('axios');

const {
    token,
    host
} = require('../config/').bscApi;

const getBalance = async (address)=>{

    const url = `${host}/api?module=account&action=balance&address=${address}&apikey=${token}`;    
    const res = await axios.get(url);

    const {
        status,
        data
    } = res;
    
    if (status!='200')
        throw {status,error:'request error',url};

    return data;

}

const getTransactions = async (address)=>{

    const url = `${host}/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&&apikey=${token}`;
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

const getTransactionStatus = async (transactionHash)=>{

    const url = `${host}/api?module=transaction&action=gettxreceiptstatus&txhash=${transactionHash}&apikey=${token}`;
    const res = await axios.get(url);

    const {
        status,
        data
    } = res;
    
    if (status!='200')
        throw {status,error:'request error',url};

    return data;

}

module.exports ={
    getBalance,
    getTransactions,
    getTransactionStatus    
};