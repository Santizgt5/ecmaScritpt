class User {};


//const newUser = new User();

class user {

    //Metodos
    greeting() {
        return 'Hello';
    }
};

const gndx = new user();

console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());


//Constructor
class Car {

    constructor() {
        console.log('Nuevo carro');
    }

    greeting() {
        return 'Hello';
    }
}

const mazda = new Car();

//This
class Animal {
    constructor(name) {
        this.name = name
    }

    //Method
    run() {
        return 'Running';
    }

    greeting() {
        return `${this.name} ${this.run()}`
    }
}

const dog = new Animal('Perro');
console.log(dog.greeting());

//Setter and getters

 class Console {

    //Constructor
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }

    //MetodosS
    buy() {
        return 'I buy a';
    }

    greeting() {
         return `${this.buy()} ${this.name}`
    }
    
    get uCompany() {
        return this.company;
    }

    set uCompany(company) {
        this.company = company;
    }

 }

 const ps = new Console('PS5', 'Sony');
 console.log(ps.uCompany);
 console.log(ps.uCompany = 'Microsoft')

