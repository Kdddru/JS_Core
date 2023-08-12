function a(){

    console.log(b);
    
    var b= 'bbb'

    console.log(b);

    function b (){
    }
    console.log(b);    
}

a();

//var에서는 가능함
// let에서는 에러