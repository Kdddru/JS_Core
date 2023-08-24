const outer = function(){
  let a = 1;
  const inner= function(){
    return ++a
  }

  return inner
}

let outer2 = outer();

console.log(outer2)

console.log(outer2());
console.log(outer2());


const outer1 = function(){
  let a = 1;
  const inner =function(){
    return ++a
  }

  return inner();
}

const outer3 = outer1();

console.log(outer3);
console.log(outer3);

console.log(outer2());