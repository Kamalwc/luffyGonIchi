// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

export default class Manager extends Employee{

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