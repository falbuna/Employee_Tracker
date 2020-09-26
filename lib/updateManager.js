const connection = require('../connection');
const inquirer = require('inquirer');

        async function updateManager(callback){
            let employeeTable = await employeeList()

            let employeeArray = []
            for (let i = 0; i < employeeTable.length; i++) {
                let employees = employeeTable[i].full_name;
                employeeArray.push(employees);
            }

            inquirer
                .prompt([
                    {
                        name: "employee",
                        type: "list",
                        message: "Who is the employee you want to change the manager for?",
                        choices: employeeArray
                    },
                    {
                        name: "manager",
                        type: "list",
                        message: "Who is the new manager for this employee?",
                        choices: employeeArray
                    }
                ])
                .then(function(response){
                    let employeeid;
                    for (let i = 0; i < employeeTable.length; i++){
                        if (response.employee === employeeTable[i].full_name){
                                employeeid =  employeeTable[i].id;
                        }
                    }
                    
                    let managerid;
                    for (let i = 0; i < employeeTable.length; i++){
                        if (response.manager === employeeTable[i].full_name){
                                managerid =  employeeTable[i].id;
                        }
                    }
                    connection.query(
                        "UPDATE employee SET employee.manager_id = ? WHERE employee.id = ?",
                        [managerid, employeeid],
                    function(err){
                        if (err) throw err;
                        console.log("Employee has been updated.");
                        callback();
                    }
                )
                })
        };

        module.exports = updateManager;

        function employeeList() {
            return new Promise(function(resolve, reject) {
                connection.query("SELECT CONCAT(employee.first_name,' ',employee.last_name) as full_name, employee.id as id from employee WHERE first_name IS NOT NULL OR last_name IS NOT NULL", function(error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
        }