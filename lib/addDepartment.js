const connection = require('../connection');
const inquirer = require('inquirer')

function addDepartment(){
    inquirer
        .prompt([
            {
                name: "department",
                type: "input",
                message: "What is the name of the department you want add?"
            }
        ])
        .then(function(answer){
            connection.query(
                "INSERT INTO department SET ?",
            {
                department: answer.name, 
            },
            function(err){
                if (err) throw err;
                console.log("Department has been updated");
            }
        )
        })
};

// addDepartment();

    module.exports = addDepartment;