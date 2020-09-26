var mysql = require('mysql');
var inquire = require('inquire');

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
    console.log(`connected as id  ${connection.threadId}`);
    addDepartment();
});

function start() {
    // inquire start up page with options that lead to functions
};

function addDepartment() {
    // (id, name)
    connection.query(
        'INSERT INTO department SET ?',
        {
            name: "Doctors"
        },
        function (error, data) {
            if (error) throw error;
            console.table("Doctors department added");

        });
};

function addRole() {
    // (id, title, salary, department_id)
};

function addEmployee() {
    // (first_name, last_name, role_id, manager_id)
};

function viewDepartments() {
    // prints departments to screen
};

function viewRoles() {
    // prints roles to screen
};

function viewEmployees() {
    // prints current roster to screen use console.table
};


function updateEmployeeRole() {
    // updates employee's role 
};