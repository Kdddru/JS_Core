const test = function(){
  let a = 0;
  //그냥 초기화하는 코드
  let intervalId= null; 

  const inner = function(){
    if(++a>10){
      clearInterval(intervalId)
    }
    console.log(a);
  }

  intervalId = setInterval(inner,300);
}

test();