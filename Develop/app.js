const Manager = require('./lib/Manager');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

let employees = [];

const start = async () =>{
    let choice = await inquirer.prompt({
        name:"choice",
        message:"What would you like to do? [ ENTER NEW EMPLOYE ], [ QUIT ]",
        type: "list",
        choices: ["ENTER NEW EMPLOYEE", "QUIT"]
    });

   if(choice.choice == 'ENTER NEW EMPLOYEE' ){
    employeeList();
   }else{
       let end = 'end';
   }

}

//make a function to  display and return the type of employee list
const employeeList = async () => {
    let employees = await inquirer.prompt({
        name:"list",
        message:"What role employee would you like to add? [ (1) Engineer ], [ (2) Manager], [ (3) Intern ]",
        type: "list",
        choices: ["Engineer", "Manager", "Intern",]
    });

    switch(employees.list){
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
const option = async () =>{

    let choice = await inquirer.prompt({
        name:"choice",
        message:"Add another employee or Quit?",
        type:"list",
        choices: ["CONTINUE","QUIT"]
    });

    if(choice.choice == "CONTINUE"){
        employeeList();
    }else{
        fs.writeFileSync(outputPath, render(employees), "utf8");
    }
}

const managerQuestion = async () => {
    // let name, email, id, officeNumber;

    let name = await inquirer.prompt({
            name:"fullname",
            message: "What is his/her full name?",
            type: "input"
    });

    let email = await inquirer.prompt({
        name:"email",
        message:"What is his/her email?",
        type: "input"
    });

    let id = await inquirer.prompt({
        name:"id",
        message:"what is his/her id?",
        type: "input"
    });

    let officeNumber = await inquirer.prompt({
            name:"officeNumber",
            message:"what is his/her officeNumber?",
            type: "input"
    });

    let manager = new Manager(name.fullname, email.email, id.id, officeNumber.officeNumber);
    
    employees.push(manager);
    option();
}

const engineerQuestion = async () => {

    let name, email, id, github;

    name = await inquirer.prompt(
        {
            name:"name",
            message: "What is his/her full name?",
            type: "input"
        }
    );

    email = await inquirer.prompt({
        name:"email",
        message:"What is his/her email?",
        type: "input"
    });

    id = await inquirer.prompt({
        name:"id",
        message:"what is his/her id?",
        type: "input"
    });

    github = await inquirer.prompt({
        name:"github",
        message:"what is his/her GitHub username?",
        type: "input"
    });

    let engineer = new Engineer(name.name, email.email, id.id, github.github);
    
    employees.push(engineer);
    option();
}

const internQuestion = async () => {

    let name, email, id, school;

    try
    {
        name = await inquirer.prompt({
            name:"name",
            message: "What is his/her full name?",
            type: "input"
        });
    } catch (error){
        console.log(error);
    }

    try{
        email = await inquirer.prompt({
            name:"email",
            message:"What is his/her email?",
            type: "input"
        });
    } catch (error){
        console.log(error);
    }
    

    try{
        id = await inquirer.prompt({
            name:"id",
            message:"what is his/her id?",
            type: "input"
        });
    } catch (error){
        console.log(error);
    }
   try{
        school = await inquirer.prompt({
            name:"school",
            message:"what is the name of his/her University / College?",
            type: "input"
        });
    } catch (error){
        console.log(error);
    }
    

    let intern = new Intern(name.name, email.email, id.id, school.school);
            
    employees.push(intern);
    option();
}

start();


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

//how to write html files to another html file ( use output path??)
// how to include hmtl file like html snippet blocks??

//****  open html page from CLI that fills the templates with JS





















// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
