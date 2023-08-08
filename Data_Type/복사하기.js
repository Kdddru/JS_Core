var user ={
    name : 'Dudu',
    gender : 'male'
}

var copyObject = function(target){
    var result = {};
    for(var prop in target){
        result[prop] = target[prop]
    }
    return result;
};


console.log(copyObject(user));


