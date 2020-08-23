// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
export default class Engineer extends Employee {

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
