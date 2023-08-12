function a(x){
    console.log(x);
    let a ;
    console.log(a);
    a = 2;
    console.log(a);
}
a(1);
// 호이스팅이 안되어있음


function b(){
    var x = 1;
    console.log(x);

    var x;
    console.log(x);

    var x = 2;
    console.log(x); 
}

b();

//2번째 var x 를 선언했을때 console에 undefind이 아닌 제일 1이 출력

function c(){
    let x;

    
    x = 1;
    console.log(x);
    x = 2;
    console.log(x);
}

c();