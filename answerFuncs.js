require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const connection = mysql.createConnection({
  host: 'localhost',
  user: username,
  password: password,
  database: 'employeetrackerdb2',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database');
});

const viewAllDepartments = function() {
    console.log("Test");
};

const viewAllRoles = function() {
    console.log("Test");
};

const viewAllEmployees = function() {
    console.log("Test");
};

const addDepartment = function() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'deptName',
        message: "Enter a name for the department:",
      }
    ])
    .then((answers) => {
      const departmentName = answers.deptName;
      insertDepartment(departmentName);
    })
    .catch((error) => {
      console.error(error);
    });
};

const addRole = function() {
    console.log("Test");
};

const addEmployee = function() {
    console.log("Test");
};

const updateEmployeeRole = function() {
    console.log("Test");
};

const insertDepartment = function(departmentName) {

    connection.query('INSERT INTO department (name) VALUES (?)', [departmentName], (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Department inserted successfully!");
    });
  };


module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
  };