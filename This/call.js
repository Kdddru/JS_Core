const func = function (a,b,c) {
  console.log(this, a,b,c)
}

func.call({x:0},1,2,3);



const obj = {
  a: 1,
  method : function(x,y){
    console.log(this.a, x,y)
  }
};

obj.method(1,2);

obj.method.call({a:4},1,2);

