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
    connection.query('SELECT id, name FROM department', (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
  
      console.table(results, ['id', 'name']);
    });
};

const viewAllRoles = function() {
    connection.query('SELECT role.title, role.salary, department.name AS department_name FROM role JOIN department ON role.department_id = department.id', (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
  
      console.table(results, ['title', 'salary', 'department_name']);
    });
};

const viewAllEmployees = function() {
    connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title AS role_name FROM employee JOIN role ON employee.role_id = role.id', (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
    
        console.table(results, ['id', 'first_name', 'last_name', 'role_name']);
      });
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
    connection.query('SELECT name FROM department', (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
  
      const departmentList = results.map((result) => ({
        name: result.name,
        value: result.id
      }));

      inquirer.prompt([
        {
          type: 'input',
          name: 'roleName',
          message: "Enter a name for the role:",
        },
        {
          type: 'input',
          name: 'roleSalary',
          message: "Enter the salary for the role:",
        },
        {
          type: 'list',
          name: 'roleDept',
          message: "Which department does this role belong to?",
          choices: departmentList,
        }
      ])
      .then((answers) => {
        const roleName = answers.roleName;
        const roleSalary = answers.roleSalary;
        const roleDept = answers.roleDept;
        insertRole(roleName, roleSalary, roleDept);
      })
      .catch((error) => {
        console.error(error);
      });
    });
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
      console.log("Department inserted successfully");
    });
};

const insertRole = function(roleName, roleSalary, roleDept) {
    connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [roleName, roleSalary, roleDept], (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Role inserted successfully!");
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