let a = 1;

function outer(){
    function inner(){
        let a = 3
        console.log(a);
    }
    inner();
    console.log(a);
}

outer();
console.log(a);

// 담긴 순서
// a -> outer -> inner 

// 실행순서
//inner -> outer -> a