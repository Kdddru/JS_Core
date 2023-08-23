const addcoffee = function(name){
  return new Promise(function(reslove){
    setTimeout(function(){
      reslove(name);
    },500)
  })
}

const coffeeMaker = async function(){
  let coffeeList = '';
  const _addCoffee = async function(name){
    coffeeList += (coffeeList ? ',' : '') + await addcoffee(name);
  }
  await _addCoffee('에스프레소');
  console.log(coffeeList);
};

coffeeMaker();