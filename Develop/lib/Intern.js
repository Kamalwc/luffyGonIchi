// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


export default class Intern extends Employee{
    
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