const Employee = require("./Employee");

module.exports = class Intern extends Employee{
    
    constructor(school){
            super(name, email, id)
            this.role = 'Intern'
            this.school = school;
    }

    getRole(){
        return this.role;
    }

    getSchool(){
        return this.school;
    }
}