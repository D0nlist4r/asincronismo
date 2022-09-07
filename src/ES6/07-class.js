// Clases
 class goku{
    constructor(name, age, country){
        this.name = name
        this.age = age
        this.country = country
    }
    info(){
        return console.log(`hola ${this.name} tienes ${this.age} y vives en ${this.country}`);
    }
    set(n){
        this.country = n;
    }
 }

 const user = new goku('sebastian',24,'colombia');

user.info();
console.log (user.country = 'venezuela');
console.log(user.country)