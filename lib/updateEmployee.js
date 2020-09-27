const connection = require('../connection');
const inquirer = require('inquirer');

        // This is for the function to update an employee's role.
        async function updateEmployee(callback){
            let roleTable = await roleList()
            let employeeTable = await employeeList()
            // This will hold the array for the list of the roles for the inquirer prompt.
            let roleArray = []
            for (let i = 0; i < roleTable.length; i++) {
                let roles = roleTable[i].title;
                roleArray.push(roles);
            }
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
                        message: "Who is the employee you want to update?",
                        choices: employeeArray
                    },
                    {
                        name: "role",
                        type: "list",
                        message: "What is the new role of this employee?",
                        choices: roleArray
                    },
                    {
                        name: "manager",
                        type: "list",
                        message: "Who is the new manager for this employee?",
                        choices: employeeArray
                    }
                ])
                .then(function(response){
                    // This will get the id of the employee.
                    let employeeid;
                    for (let i = 0; i < employeeTable.length; i++){
                        if (response.employee === employeeTable[i].full_name){
                                employeeid =  employeeTable[i].id;
                        }
                    }
                    // This will get the id of the role.
                    let roleid;
                    for (let i = 0; i < roleTable.length; i++){
                        if (response.role === roleTable[i].title){
                                roleid =  roleTable[i].id;
                        }
                    }
                    // This will get the id of the manager.
                    let managerid;
                    for (let i = 0; i < employeeTable.length; i++){
                        if (response.manager === employeeTable[i].full_name){
                                managerid =  employeeTable[i].id;
                        }
                    }
                    connection.query(
                        // This is the query that will update the employees role id and manager id for the selected employee.
                        "UPDATE employee SET employee.role_id = ?, employee.manager_id = ? WHERE employee.id = ?",
                        [roleid, managerid, employeeid],
                    function(err){
                        if (err) throw err;
                        console.log("Employee has been updated.");
                        // This is the callback for the initial inquirer prompt.
                        callback();
                    }
                )
                })
        };

        module.exports = updateEmployee;
        // This is the promise that will get the list of all the roles for the inquirer prompt.
        function roleList() {
            return new Promise(function(resolve, reject) {
                connection.query(`SELECT * FROM role`, function(error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
        }
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