const newArr = [10,20,30];

const newArr2 = newArr.map((value, index)=>{
  console.log(value, index);
  return value + 5
});


console.log(newArr2);

