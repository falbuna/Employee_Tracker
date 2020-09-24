const inquirer = require('inquirer');
const viewAllEmployees = require("./lib/allEmployees");
const viewAllDepartments = require("./lib/allDepartments");
const viewAllRoles = require("./lib/allRoles");

function initialPrompt(){
    console.log("Welcome to my App!")
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all Employees",
                "View all Departments",
                "View all Roles",
                "Add Departments",
                "Add Roles",
                "Add Employees",
                "Update Employee Roles"
            ]
        }).then(function(answer){
            switch (answer.action){
                case "View all Employees":
                    viewAllEmployees();
                    break;

                case "View all Departments":
                    viewAllDepartments();
                    break;

                case "View all Roles":
                    viewAllRoles();
                    break;
                }
            })
};

initialPrompt();