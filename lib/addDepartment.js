const connection = require('../connection');
const inquirer = require('inquirer');

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

    module.exports = addDepartment;