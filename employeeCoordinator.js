const mysql = require('mysql');
const inquirer = require('inquirer');

// This where the connection file is located and required.
const connection = require('./connection');

// These are where the functions for the list of actions in the prompts are located .
const viewAllEmployees = require("./lib/allEmployees");
const viewAllDepartments = require("./lib/allDepartments");
const viewAllRoles = require("./lib/allRoles");
const addDepartment = require("./lib/addDepartment");
const addRole = require("./lib/addRole");
const addEmployee = require("./lib/addEmployee");
const updateEmployee = require("./lib/updateEmployee");
const updateManager = require("./lib/updateManager");
const deleteDepartment = require("./lib/deleteDepartment");
const deleteRole = require("./lib/deleteRole");
const deleteEmployee = require("./lib/deleteEmployee");

// This will start the connection and the inital inquirer prompt.
connection.connect(function(err){
    if (err) throw err;
    initialPrompt();
});

// This is where the inquirer prompt will start with the list of actions that the user can take.
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
                "Update an Employee's Manager",
                "Delete a Department",
                "Delete a Role",
                "Delete an Employee",
                "Exit"
            ]
        }).then(function(answer) {
                if (answer.action === "View all Employees"){
                    // When the user selects view all employees, they will be taken to the allEmployees.js file.
                    viewAllEmployees(initialPrompt);
                }
                else if(answer.action === "View all Departments"){
                    // When the user selects view all departments, they will be taken to the allDepartments.js file.
                    viewAllDepartments(initialPrompt);
                }
                else if(answer.action === "View all Roles"){
                    // When the user selects view all roles, they will be taken to the allRoles.js file.
                    viewAllRoles(initialPrompt);
                }
                else if(answer.action === "Add a Department"){
                    // When the user selects add a department, they will be taken to the addDepartment.js file.
                    addDepartment(initialPrompt);
                }
                else if(answer.action === "Add a Role"){
                    // When the user selects add a role, they will be taken to the addRole.js file.
                    addRole(initialPrompt);
                }
                else if (answer.action === "Add an Employee"){
                    // When the user selects add an employee, they will be taken to the addEmployee.js file.
                    addEmployee(initialPrompt);
                }
                else if (answer.action === "Update an Employee's Role"){
                    // When the user selects update an employee's role, they will be taken to the updateEmployee.js file.
                    updateEmployee(initialPrompt);
                }
                else if (answer.action === "Update an Employee's Manager"){
                    // When the user selects update an employee's manager, they will be taken to the updateManager.js file.
                    updateManager(initialPrompt);
                }
                else if (answer.action === "Delete a Department"){
                    // When the user selects delete a department, they will be taken to the deleteDepartment.js file.
                    deleteDepartment(initialPrompt);
                }
                else if (answer.action === "Delete a Role"){
                    // When the user selects delete a role, they will be taken to the deleteRole.js file.
                    deleteRole(initialPrompt);
                }
                else if (answer.action === "Delete an Employee"){
                    // When the user selects delete an employee, they will be taken to the deleteEmployee.js file.
                    deleteEmployee(initialPrompt);
                }
                else if(answer.action === "Exit"){
                    // This will end the application.
                    connection.end();
                }
                }
            )
    };
    
    


