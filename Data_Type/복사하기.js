var user ={
    name : 'Dudu',
    gender : 'male',
    urls:{
        portfolio : 'http://github.com/abc',
        blog : 'http://blog.com',
        facebook: 'http://facebook.com/abc'
    }
}

//얕은 복사
var copyObject = function(target){
    var result = {};
    for(var prop in target){
        result[prop] = target[prop]
    }
    return result;
};

var user2 = copyObject(user);

//깊은 복사 ( 객체안의 객체 복사)
//urls도 복사해야지 기존데이터 불변
user2.urls = copyObject(user.urls);

console.log(user2);


user2.name = 'Duru';
console.log(user.name === user2.name);

//
user.urls.portfolio ='http://portfolio.co.kr';
console.log(user.urls.portfolio === user2.urls.portfolio) ;