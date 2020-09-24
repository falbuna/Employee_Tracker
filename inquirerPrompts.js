const inquirer = require('inquirer');
const viewAllEmployees = require("./lib/allEmployees");
const viewAllDepartments = require("./lib/allDepartments");
const viewAllRoles = require("./lib/allRoles");
const addDepartment = require("./lib/addDepartment");
const connection = require('./connection');

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
                else if(answer.action === "View all Departments"){
                    viewAllDepartments();
                    initialPrompt();
                }
                else if(answer.action === "View all Roles"){
                    viewAllRoles();
                    initialPrompt();
                }
                else if(answer.action === "Add Department"){
                    addDepartment();
                    initialPrompt();
                }
                else {
                    connection.end();
                }
                }
            )
};

module.exports = initialPrompt;