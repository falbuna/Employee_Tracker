const connection = require('../connection');
const inquirer = require('inquirer');

        // This is the function to add an employee that will get exported to the employee database.
        async function addEmployee(callback){
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
                        choices: roleArray
                    },
                    {
                        name: "manager",
                        type: "rawlist",
                        message: "Who is the manager of the new employee?",
                        choices: employeeArray
                    }
                ])
                .then(function(response){
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
                        // This is for the query to add the new employee.
                        "INSERT INTO employee SET ?",
                    {
                        first_name: response.firstName,
                        last_name: response.lastName,
                        role_id: roleid,
                        manager_id: managerid
                    },
                    function(err){
                        if (err) throw err;
                        console.log("Employee has been added.");
                        // This is the callback for the initial inquirer prompt.
                        callback();
                    }
                )
                })
        };
        
        module.exports = addEmployee;

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