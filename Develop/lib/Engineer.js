const Employee = require("./Employee");


module.exports = class Engineer extends Employee {

    constructor(gitHub){
        super(name, email, id)
        this.role = 'Engineer';
        this.gitHub = gitHub; 
    }

    getRole(){
        return this.role;
    }

    getGitHub(){
        return this.gitHub;
    }
}
