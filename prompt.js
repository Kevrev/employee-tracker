const inquirer = require('inquirer');
const mysql = require('mysql2');
const answerFuncs = require('./answerFuncs');

const inquirerPrompt = function() {
  const questions = [
    "What would you like to do?",
    "What is the name of the department you would like to add?",
    "What is the name of the role?",
    "What is the salary of the role?",
    "Which department does this role belong to?",
    "What is the first name of the employee?",
    "What is the last name of the employee?",
    "What is the role of the employee?",
    "Who is the manager of the employee?",
    "Which employee's role would you like to update?",
  ];
  inquirer.prompt(
    {
        type: 'list',
        name: 'actions',
        message: questions[0],
        choices: [
            "View All Employees", 
            "View All Roles", 
            "View All Employees", 
            "Add a department", 
            "Add a role", 
            "Add an employee", 
            "Update an employee role",
         ]
    }).then((answer) => {
        switch (answer.actions) {
            case "View All Departments":
                answerFuncs.viewAllDepartments();
                break;
              case "View All Roles":
                answerFuncs.viewAllRoles();
                break;
              case "View All Employees":
                answerFuncs.viewAllEmployees();
                break;
              case "Add a department":
                answerFuncs.addDepartment();
                break;
              case "Add a role":
                answerFuncs.addRole();
                break;
              case "Add an employee":
                answerFuncs.addEmployee();
                break;
              case "Update an employee role":
                answerFuncs.updateEmployeeRole();
                break;
              default:
                console.log(`Invalid action: ${answer.action}`);
            }
    });
}

inquirerPrompt();

module.exports = inquirerPrompt;