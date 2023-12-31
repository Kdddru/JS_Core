const obj = {
    a:1,
    b:{
        c:null,
        d:[1,2]
    }
};

const copyObjDeep = function(target){
    const result ={};

    if(typeof target === 'object' && target !== null){
        for(var prop in target){
            result[prop] = copyObjDeep(target[prop]);
        }
    }
    else{
        result = target;
    }


    return result; 
};


const obj2 = copyObjDeep(obj);
obj2.b.c = 1;
console.log(obj2);
console.log(obj.b.d == obj2.b.d);
