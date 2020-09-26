var mysql = require('mysql');
var inquirer = require('inquirer');

const connectionConfig = {
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "employee_db"
};

var connection = mysql.createConnection(connectionConfig);

connection.connect(function (err) {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    start();
});

function start() {
    // inquire start up page with options that lead to functions
    inquirer
        .prompt({
            name: "start",
            type: "list",
            message: "If this is your first entree start by entering a Department. Next a Role and then employees",
            choices: ["DEPARTMENT", "ROLE", , "EMPLOYEE", "VIEW EMPLOYEES","VIEW DEPARTMENTS", "VIEW ROLES", "UPDATE ROLES", "END",]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.start === "DEPARTMENT") {
                addDepartment();
            }
            else if (answer.start === "ROLE") {
                addRole();

            }
            else if (answer.start === "EMPLOYEE") {
                addEmployee();
            }
            else if (answer.start === "VIEW DEPARTMENTS") {
                viewDepartments();
            }
            else if (answer.start === "VIEW ROLES") {
                viewRoles();
            }
            else if (answer.start === "UPDATE ROLES") {
                updateEmployeeRole();
            }
            else if (answer.start === "VIEW EMPLOYEES") {
                viewEmployees();
            }
            else {
                connection.end();
            }
        });
};

function addDepartment() {
    // (id, name)
    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What is the Department's name?"
        }
    ])
        .then(function (answer) {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: answer.department
                },
                function (error, data) {
                    if (error) throw error;
                    console.log("Department added")
                    start();
                }
            );
        });
}

function addRole() {
    // (id, title, salary, department_id)
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the Role name?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the Salary?"
        }
    ])
        .then(function (answer) {
            connection.query(
                'INSERT INTO role  SET ?',
                {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: 1 // need help here
                },

                function (error, data) {
                    if (error) throw error;
                    // logic goes here
                    console.log("Role Added")
                    start();
                }
            );
        });
}

function addEmployee() {
    // (first_name, last_name, role_id, manager_id)
    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the Employee's first name?"
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the Employee's last name?"
        },
        {
            name: "role_id",
            type: "input",
            message: "What is the Employee's role?"
        },
        {
            name: "manager_id",
            type: "input",
            message: "Who is the employee's Manager? N/A if none"
        }
    ])
    .then(function(answer) {
    connection.query(
        'INSERT INTO employees SET ?',
        {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: 1, // need help here
            manager_id: 1
        },
        function (error, data) {
            if (error) throw error;
            // logic goes here
        });
};

function viewDepartments() {
    // prints departments to screen
    connection.query(
        'query',
        [queryParameters],
        function (error, data) {
            if (error) throw error;
            // logic goes here
        });
};

function viewRoles() {
    // prints roles to screen
    connection.query(
        'query',
        [queryParameters],
        function (error, data) {
            if (error) throw error;
            // logic goes here
        });
};

function viewEmployees() {
    // prints current roster to screen use console.table
    connection.query(
        'SELECT * FROM employees',
        [queryParameters],
        function (error, data) {
            if (error) throw error;
            console.table(employees) // display table??? 
        });
};


function updateEmployeeRole() {
    // updates employee's role 
    connection.query(
        'query',
        [queryParameters],
        function (error, data) {
            if (error) throw error;
            // logic goes here
        });
};