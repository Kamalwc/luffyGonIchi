const Employee = require("./Employee");


module.exports = class Engineer extends Employee {

    constructor(name, email, id, github){
        super(name, email, id)
        this.role = 'Engineer';
        this.github = github; 
    }

    getRole(){
        return this.role;
    }

    getGithub(){
        return this.github;
    }
}
