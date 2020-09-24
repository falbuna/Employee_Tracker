const mysql = require('mysql');
const inquirer = require('inquirer');
const viewAllEmployees = require("./lib/allEmployees");
const viewAllDepartments = require("./lib/allDepartments");
const viewAllRoles = require("./lib/allRoles");
// const addDepartment = require("./lib/addDepartment");

const connectionConfig = {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: 'employeedb'
};

const connection = mysql.createConnection(connectionConfig);

connection.connect(function(err){
    if (err) throw err;
    initialPrompt();
});

function initialPrompt(){
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all Employees",
                "View all Departments",
                "View all Roles",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update Employee Roles",
                "Exit"
            ]
        }).then(function(answer) {
                if (answer.action === "View all Employees"){
                    viewAllEmployees();
                    initialPrompt();
                }
                if(answer.action === "View all Departments"){
                    viewAllDepartments();
                    initialPrompt();
                }
                if(answer.action === "View all Roles"){
                    viewAllRoles();
                    initialPrompt();
                }
                if(answer.action === "Add a Department"){
                    addDepartment();
                }
                if(answer.action === "Add a Role"){
                    addRole();
                }
                }
            )
};

        function addDepartment(){
            inquirer
                .prompt([
                    {
                        name: "department",
                        type: "input",
                        message: "What is the name of the department you want add?"
                    }
                ])
                .then(function(response){
                    connection.query(
                        "INSERT INTO department SET ?",
                    {
                        name: response.department, 
                    },
                    function(err){
                        if (err) throw err;
                        console.log("Department has been updated");
                        initialPrompt();
                    }
                )
                })
        };

        function addRole(){
            connection.query("SELECT * FROM department", function(err, results){
                if (err) throw err;

            inquirer
                .prompt([
                    {
                        name: "role",
                        type: "input",
                        message: "What is the title of the role you want add?"
                    },
                    {
                        name: "salary",
                        type: "input",
                        message: "What is the salary of that role?"
                    },
                    {
                        name: "departmentID",
                        type: "rawlist",
                        message: "What department does this role fit under?",
                        choices: function(){
                            var choiceArray = [];
                            for (var i = 0; i < results.length; i++){
                                choiceArray.push(results[i].name);
                            }
                            return choiceArray;
                        }
                    }
                ])
                .then(function(response){
                    connection.query(
                        "INSERT INTO role SET ?",
                    {
                        title: response.role,
                        salary: response.salary,
                    },
                    function(err){
                        if (err) throw err;
                        console.log("Role has been updated");
                        initialPrompt();
                    }
                )
                })
            })
        };


