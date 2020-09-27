const connection = require('../connection');
const inquirer = require('inquirer');

// This is the function to add an employee that will get exported to the employee database.
function addRole(callback){
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
                name: "department",
                type: "rawlist",
                message: "What department does this role fit under?",
                choices: function(){
                    // This function will get a list of all the departments to add the new role to.
                    var choiceArray = [];
                    for (var i = 0; i < results.length; i++){
                        choiceArray.push(results[i].name);
                    }
                    return choiceArray;
                }
            }
        ])
        .then(function(response){
            // This will get the id for the department for the new role.
            let id;
            for (let i = 0; i < results.length; i++){
                if (results[i].name === response.department){
                        id =  results[i].id
                }
            }    
            connection.query(
                // This is the query to add the new role.
                "INSERT INTO role SET ?",
            {
                title: response.role,
                salary: response.salary,
                department_id: id
            },
            function(err){
                if (err) throw err;
                console.log("Role has been updated");
                // This is the callback for the initial inquirer prompt.
                callback();
            }
        )
        })
    })
};

module.exports = addRole;