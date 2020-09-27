const connection = require('../connection');
const inquirer = require('inquirer');

        // This is for the function to delete an employee.
        async function deleteEmployee(callback){
            let employeeTable = await employeeList()
            // This will hold the array for the list of the employees for the inquirer prompt.
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
                        message: "Who is the employee you want to delete?",
                        choices: employeeArray
                    }
                ])
                .then(function(response){
                    // This will get the id for the selected employee to deleted.
                    let employeeid;
                    for (let i = 0; i < employeeTable.length; i++){
                        if (response.employee === employeeTable[i].full_name){
                                employeeid =  employeeTable[i].id;
                        }
                    }

                    connection.query(
                        // This is for the query that will delete the employee.
                        "DELETE FROM employee WHERE employee.id = ?",
                        [employeeid],
                    function(err){
                        if (err) throw err;
                        console.log("Employee has been deleted.");
                        // This is the callback for the initial inquirer prompt.
                        callback();
                    }
                )
                })
        };

        module.exports = deleteEmployee;

        // This is the promise that will get the list of all the employees for the inquirer prompt.
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