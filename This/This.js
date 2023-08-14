const func = function (x){
    console.log(this, x);
}

func(1);

let obj = {
    method : func
}

obj.method(2) // this는 obj를 가르킴

obj['method'](3);