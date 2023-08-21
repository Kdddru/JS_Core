// new Promise(function(resolve){
//   setTimeout(function(){
//     let name  = '에스프레소'
//     console.log(name);
//     resolve(name);
//   },500)
// }).then(function(prevName){
//   return new Promise(function(resolve){
//     setTimeout(function(){
//       let name  = `${prevName}, 아메리카노`
//       console.log(name);
//       resolve(name);
//     },500)
//   });
// });


const addcoffee = function(name){
  return function(prevName){
    return new Promise(function(resolve){
      setTimeout(function(){
        let newName = prevName ? `${prevName}, ${name}` : name ;
        console.log(newName);
        resolve(newName);
      },500);
    })
  };
};

addcoffee('에스프레소')()
.then(addcoffee('아메리카노'))
.then(addcoffee('카페모카'))