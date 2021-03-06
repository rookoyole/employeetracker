const { prompt } = require("inquirer");
const util = require("util");
const logo = require("asciiart-logo");
//const db = require("./db");
const cTable = require("console.table");
const mysql = require("mysql2");
const inquirer = require("inquirer");

init();

// Display logo text, load main prompts
function init() {
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);

    loadMainPrompts();
}

async function loadMainPrompts () 
{
    prompt([{
        type: "list",
        name: "choice",
        loop: false,
        message: "What would you like to do?",
        choices: 
        [
            {
                name: "View All Employees",
                value: "VIEW_EMPLOYEES"
            },
            {
                name: "View All Roles",
                value: "VIEW_ROLES"
            },
            {
                name: "View All Departments",
                value: "VIEW_DEPARTMENTS"
            },
            {
                name: "Add Department",
                value: "ADD_DEPARTMENT"
            },
            {
                name: "Add Role",
                value: "ADD_ROLE"
            },
            {
                name: "Add Employee",
                value: "ADD_EMPLOYEE"
            },
            {
                name: "Update Employee Role",
                value: "UPDATE_EMPLOYEE_ROLE"
            }
        ]}]
    )
    .then(({ choice }) => {
        if (choice === 'VIEW_EMPLOYEES') {
            //const sqlstatement = 'SELECT * FROM employee';

            const sqlstatement = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id';
            //const sqlstatement = 'SELECT employee.*, role.title, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id';

            //const sqlstatement = 'SELECT employee.*, role.* FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id';
            //const sqlstatement = 'SELECT role.*, department.name FROM role LEFT JOIN department ON role.department_id = department.id';
            console.log('====================');
            console.log('View All Employees');
            console.log('====================');
            dbConnect(sqlstatement);
            loadMainPrompts();
        }
        else if (choice === 'VIEW_ROLES') {
            const sqlstatement = 'SELECT role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id';

            console.log('====================');
            console.log('View All Roles');
            console.log('====================');
            dbConnect(sqlstatement);
            loadMainPrompts();
        }
        else if (choice === 'VIEW_DEPARTMENTS') {
            const sqlstatement = 'SELECT * FROM department';
            console.log('====================');
            console.log('View All Departments');
            console.log('====================');
            dbConnect(sqlstatement);
            loadMainPrompts();
        }
        else if (choice === 'ADD_DEPARTMENT') {
            //const sqlstatement = {};
            const dep = prompt([{
                type: "input",
                name: "dep",
                message: "Add Department"
            }]
            );

            const sqlstatement = 'INSERT INTO department (name) VALUES (?)';
            dbConnect(sqlstatement,dep.dep);

            console.log('====================');
            console.log('Add Department');
            console.log('====================');
            
           loadMainPrompts();
        }
        else if (choice === 'ADD_ROLE') {

            const dep = prompt([{
                type: "input",
                name: "role",
                message: "Add Department"
            }]
            );

            const sqlstatement = 'INSERT INTO role (name) VALUES (?)';
            dbConnect(sqlstatement,role.role);

            console.log('====================');
            console.log('Add Role');
            console.log('====================');
            loadMainPrompts();
        }
        else if (choice === 'ADD_EMPLOYEE') {
            const dep = prompt([{
                type: "input",
                name: "emp",
                message: "Add Department"
            }]
            );

            const sqlstatement = 'INSERT INTO employee (name) VALUES (?)';
            dbConnect(sqlstatement,emp.emp);
            console.log('====================');
            console.log('Add Employee');
            console.log('====================');
            loadMainPrompts();
        }
        else if (choice === 'UPDATE_EMPLOYEE_ROLE') {
            const dep = prompt([{
                type: "input",
                name: "upd",
                message: "Add Department"
            }]
            );

            const sqlstatement = 'INSERT INTO department (name) VALUES (?)';
            dbConnect(sqlstatement,upd.upd);
            
            console.log('====================');
            console.log('Update Employee Role');
            console.log('====================');
            loadMainPrompts();
        }
    })
    .catch (error => {
        console.log('ERROR: ' + error);
    });
};

function dbConnect (query) {
    console.log('Connect with ', query);
    const connection = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: 'saralong',
        database: 'employeetracker'
    });
    
   //connection.query = util.promisify(connection.query);

    connection.query(query, function(err, results, fields) {
        console.log('Querying');
        const queryResult = cTable.getTable(results);
        console.log(queryResult);
    });
    
};