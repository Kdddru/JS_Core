function a (){
    console.log('함수 선언');
}
a();

const b = function(){
    console.log('익명함수');
}
b();


const c = function d(){
    console.log('기명함수');
}

c();
// d()는 에러



console.log(sum(1,2));
// console.log(multiple(3,4));  에러

function sum (a,b) {
    return a+b;
}

// var multiple = function(a,b){
//     return a+b
// }

