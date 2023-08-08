var user1 = {
    name : 'dudu',
    gender : 'male'
};

// var changeName= function(user, newName){
//     var newUser = user;
//     newUser.name = newName;
//     return newUser
// }


// 복사하기
var changeName = function(user, newName){
    var newUser = {...user1} ;
    newUser.name = newName;
    newUser.gender = user.gender;
    return newUser
};


var user2 =changeName(user1, 'duhyun');


if(user1 !== user2){
    console.log('유저 정보가 바꼇습니다.');
}

console.log(user1.name, user2.name);

console.log(user1 === user2);