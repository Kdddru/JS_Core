const Cat = function(name, age){
    this.bark = '야용';
    this.name = name;
    this.age = age;
    //this => Cat에 대한 객체(인스턴스)생성 및 부여
    
};


const Nabi = new Cat('나비',5);

console.log(Nabi);