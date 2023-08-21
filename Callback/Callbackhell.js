let coffeeList = '';

const addAmericano = function(name){
  coffeeList += `, ${name}`;
  console.log(coffeeList);
}

const addEspresso = function(name){
  coffeeList += `, ${name}`;
  console.log(coffeeList);
  setTimeout(addAmericano,500,`아메리카노`);
}

const addMocha = function(name){
  coffeeList = name
  console.log(coffeeList);
  setTimeout(addEspresso,500,'에스프레소')
}


setTimeout(addMocha,500,'모카');

