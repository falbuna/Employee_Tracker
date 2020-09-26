const connection = require('../connection');
const inquirer = require('inquirer');

        async function deleteEmployee(callback){
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
                        message: "Who is the employee you want to update?",
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

                    connection.query(
                        "DELETE FROM employee WHERE employee.id = ?",
                        [employeeid],
                    function(err){
                        if (err) throw err;
                        console.log("Employee has been deleted.");
                        callback();
                    }
                )
                })
        };

        module.exports = deleteEmployee;

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