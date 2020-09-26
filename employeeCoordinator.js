const mysql = require('mysql');
const inquirer = require('inquirer');
const viewAllEmployees = require("./lib/allEmployees");
const viewAllDepartments = require("./lib/allDepartments");
const viewAllRoles = require("./lib/allRoles");
const addDepartment = require("./lib/addDepartment");
const addRole = require("./lib/addRole");
const addEmployee = require("./lib/addEmployee");
const updateEmployee = require("./lib/updateEmployee");
const connection = require('./connection');

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
                "Update an Employee's Role",
                "Exit"
            ]
        }).then(function(answer) {
                if (answer.action === "View all Employees"){
                    viewAllEmployees(initialPrompt);
                }
                else if(answer.action === "View all Departments"){
                    viewAllDepartments(initialPrompt);
                }
                else if(answer.action === "View all Roles"){
                    viewAllRoles(initialPrompt);
                }
                else if(answer.action === "Add a Department"){
                    addDepartment(initialPrompt);
                }
                else if(answer.action === "Add a Role"){
                    addRole(initialPrompt);
                }
                else if (answer.action === "Add an Employee"){
                    addEmployee(initialPrompt);
                }
                else if (answer.action === "Update an Employee's Role"){
                    updateEmployee(initialPrompt);
                }
                else if(answer.action === "Exit"){
                    connection.end();
                }
                }
            )
    };


