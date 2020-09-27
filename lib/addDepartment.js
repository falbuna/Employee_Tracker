const connection = require('../connection');
const inquirer = require('inquirer');

// This is the function to add a department that will get modified in the employee database.
function addDepartment(callback){
    // This will gather the information for the new department.
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
            // This is for the query that will insert the new department into the departments table.
                "INSERT INTO department SET ?",
            {
                name: response.department, 
            },
            function(err){
                if (err) throw err;
                console.log("Department has been updated");
                // This is the callback for the initial inquirer prompt.
                callback();
            }
        )
        })
};

    module.exports = addDepartment;