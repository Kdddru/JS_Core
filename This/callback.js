[1,2,3,4,5].forEach((x)=>{
    console.log(this,x);
})

setTimeout(()=> console.log(this), 3000);

//둘다 전역객체