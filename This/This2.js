var obj1 = {
    outer : function(){
        console.log(this); // outer
        var inner = function(){
            console.log(this); // window
        }
        inner();

        var obj2 = {
            innerMethod : inner
        };
        obj2.innerMethod();// obj

        var self  = this

        var inner2 = function(){
            console.log(self);
        }
        inner2(); //outer

        // arrow Function은 this 걱정없음!
        var arrowFun = () =>{
            console.log(this);
        }
        arrowFun();
    }
};

obj1.outer();