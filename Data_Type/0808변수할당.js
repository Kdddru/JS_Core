const user1 = {
    name : 'dudu',
    gender : 'male',
    urls:{
        portfolio : 'http://github.com/abc',
        blog : 'http://blog.com',
        facebook: 'http://facebook.com/abc'
    }
};

// var changeName= function(user, newName){
//     var newUser = user;
//     newUser.name = newName;
//     return newUser
// }


// 복사하기
const changeName = function(user, newName){
    var newUser = {...user1} ;
    newUser.name = newName;
    newUser.gender = user.gender;
    return newUser
};


const user2 =changeName(user1, 'duhyun');
console.log(user2);

user2.urls.portfolio = '';
console.log(user1.urls.portfolio === user2.urls.portfolio);  //true가 나옴



if(user1 !== user2){
    console.log('유저 정보가 바꼇습니다.');
}

console.log(user1.name, user2.name);

console.log(user1 === user2);