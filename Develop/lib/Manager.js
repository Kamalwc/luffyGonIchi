const Employee = require("./Employee");

module.exports = class Manager extends Employee{

    constructor(officeNumber){
        super(name, email, id)
        this.role = 'Manager';
        this.officeNumber = officeNumber; 
    }   

    getRole(){
        return this.role;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}