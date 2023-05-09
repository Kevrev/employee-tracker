const inquirer = require('inquirer');

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
                viewAllDepartments();
                break;
              case "View All Roles":
                viewAllRoles();
                break;
              case "View All Employees":
                viewAllEmployees();
                break;
              case "Add a department":
                addDepartment();
                break;
              case "Add a role":
                addRole();
                break;
              case "Add an employee":
                addEmployee();
                break;
              case "Update an employee role":
                updateEmployeeRole();
                break;
              default:
                console.log(`Invalid action: ${answer.action}`);
            }
    });
}

module.exports = inquirerPrompt;