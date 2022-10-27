class Console {

    //Constructor
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }

    //Metodos
    #buy() {
        return 'I buy a';
    }

    greeting() {
         return `${this.buy()} ${this.name}`
    }
    
    get #uCompany() {
        return this.company;
    }

    set #uCompany(company) {
        this.company = company;
    }

 }

 const ps = new Console('PS5', 'Sony');
 console.log(ps.uCompany);
 console.log(ps.uCompany = 'Microsoft')