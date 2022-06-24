const store ={};

const save = (key,value)=>{

    if (!store[key]){
        store[key]=[value];
    } else {
        store[key].push(value);
    }
    
}

const update = (key,value)=>{

    if (!store[key])
        throw new Error('Key not found');
    
    store[key]=value;

}

const get = (key)=>store[key];

module.exports = {
    save,
    update,
    get
};