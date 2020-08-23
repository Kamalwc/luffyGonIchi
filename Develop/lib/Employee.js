// TODO: Write code to define and export the Employee class
export default class Employee {

    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getId(){
        return this.id;
    }
}