let count = 0;

const cbFunc = function(){
  console.log(count);

  if(count++ >4){
    clearInterval(timer);
  }
}

const timer = setInterval(cbFunc,1000);



//scope.method
//scope  => window or worker