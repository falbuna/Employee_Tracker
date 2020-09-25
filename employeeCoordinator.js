const mysql = require('mysql');
const inquirer = require('inquirer');
const viewAllEmployees = require("./lib/allEmployees");
const viewAllDepartments = require("./lib/allDepartments");
const viewAllRoles = require("./lib/allRoles");
const addDepartment = require("./lib/addDepartment");
const addRole = require("./lib/addRole");
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
                "Update Employee Roles",
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
                    addEmployee();
                }
                else if(answer.action === "Exit"){
                    connection.end();
                }
                }
            )
    };

        function addEmployee(){
            connection.query("SELECT * FROM role", function(err, results){
                if (err) throw err;

            inquirer
                .prompt([
                    {
                        name: "firstName",
                        type: "input",
                        message: "What is the first name of the employee you want add?"
                    },
                    {
                        name: "lastName",
                        type: "input",
                        message: "What is the last name of the employee you want to add?"
                    },
                    {
                        name: "role",
                        type: "rawlist",
                        message: "What is the role of this new employee?",
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
                    let id;
                    for (let i = 0; i < results.length; i++){
                        if (results[i].name === response.department){
                                id =  results[i].id
                        }
                    }    
                //     connection.query(
                //         "INSERT INTO role SET ?",
                //     {
                //         title: response.role,
                //         salary: response.salary,
                //         department_id: id
                //     },
                //     function(err){
                //         if (err) throw err;
                //         console.log("Role has been updated");
                //         initialPrompt();
                //     }
                // )
                })
            })
        };

