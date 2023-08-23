const addcoffee = function(prevName, name){
  setTimeout(function(){
    coffeemaker.next(prevName ? `${prevName}, ${name}`: name)
  },500
  )
}

const coffeeGenerator = function*(){
  const espresso = yield addcoffee('', '에스프레소');
  console.log(espresso);
  const moca = yield addcoffee(espresso, '모카');
  console.log(moca);
}

const coffeemaker = coffeeGenerator();

coffeemaker.next();