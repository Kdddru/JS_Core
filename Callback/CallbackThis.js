const obj1 = {
  name : 'obj',
  func : function(){
    console.log(obj1.name);
  }
};

setTimeout(obj1.func,300);

const obj2 ={
  name : 'obj2',
  func : obj1.func
};

const callback2 = obj2.func;

setTimeout(callback2, 400);


const obj3 = {
  name : 'obj3'
}

setTimeout(obj1.func.bind(obj3),500);
