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

const remove = (key)=>{
    
    if (!store[key])
        throw new Error('Key not found');
    
    delete store[key];

};

const get = (key)=>store[key];

const getAll = (key)=>store;

module.exports = {
    save,
    update,
    remove,
    get,
    getAll
};