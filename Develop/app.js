const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");



const start = async () =>{
    let choice = await inquirer.prompt({
        name:"choice",
        message:"What would you like to do? [ (1) ENTER NEW EMPLOYE ], [ (2) QUIT ]",
        type: "list",
        choices: ["ENTER NEW EMPLOYEE", "QUIT", "1", "2"]
    });

//    if(choice.choice == '1' || choice.choice == 'ENTER NEW EMPLOYEE' ){
//        switch(choice){
//            break;
//            default:
//                let something = 'pol'
//        }
//    }else{
//        let = 'pol'
//     //    RTCPeerConnection.end()
//    }

}

//make a function to  display and return the type of employee list
const employeeList = () => {
    let employees = await inquirer.prompt({
        name:"list",
        message:"What role employee would you like to add? [ (1) Employee ], [ (2) Engineer ], [ (3) Manager], [ (4) Intern ]",
        type: "list",
        choices: ["Employee", "Engineer", "Manager", "Intern",]
    });

    switch(employees.list){
        case "Employee":
            employeeQuestion();
            break;
        case "Engineer":
            engineerQuestion();
            break;
        case "Manager":
            managerQuestion();
            break;
        case "Intern":
            internQuestion();
            break;
    }
}

// make a x4 a function that returns an inquirer question and instantiation for each type of role
const employeeQuestion = () => {
    let emp = inquirer.prompt(
        {
            name:"name",
            message: "What is his/her full name?",
            type: "input"
        },
        {
            name:"email",
            message:"What is his/her email?",
            type: "input"
        },
        {
            name:"id",
            message:"what is his/her id?",
            type: "input"
        }
    );

    let employee = new Employee(emp.name, emp.email, emp.id)

}

const managerQuestion = () => {
    let man = inquirer.prompt(
        {
            name:"name",
            message: "What is his/her full name?",
            type: "input"
        },
        {
            name:"email",
            message:"What is his/her email?",
            type: "input"
        },
        {
            name:"id",
            message:"what is his/her id?",
            type: "input"
        },
        {
            name:"officeNumber",
            message:"what is his/her officeNumber?",
            type: "input"
        }
    );

    let manager = new Manager(man.name, man.email, man.id, man.officeNumber);
}

const engineerQuestion = () => {
    let git = inquirer.prompt(
        {
            name:"name",
            message: "What is his/her full name?",
            type: "input"
        },
        {
            name:"email",
            message:"What is his/her email?",
            type: "input"
        },
        {
            name:"id",
            message:"what is his/her id?",
            type: "input"
        },
        {
            name:"gitHub",
            message:"what is his/her GitHub username?",
            type: "input"
        }
    );

    let github = new Engineer(git.name, git.email, git.id, git.gitHub)
}

const internQuestion = () => {
    let int = inquirer.prompt(
        {
            name:"name",
            message: "What is his/her full name?",
            type: "input"
        },
        {
            name:"email",
            message:"What is his/her email?",
            type: "input"
        },
        {
            name:"id",
            message:"what is his/her id?",
            type: "input"
        },
        {
            name:"School",
            message:"what is the name of his/her University / College?",
            type: "input"
        }
    );

    let intern = new Intern(int.name, int.email, int.id, int.school)
}


























// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
