var user ={
    name : 'Dudu',
    gender : 'male'
}

//얕은 복사
var copyObject = function(target){
    var result = {};
    for(var prop in target){
        result[prop] = target[prop]
    }
    return result;
};


console.log(copyObject(user));

var user2 = copyObject(user);
user2.name = 'Duru'

console.log(user2);


