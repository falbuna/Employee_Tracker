const connection = require('../connection');
const inquirer = require('inquirer');

        async function addEmployee(callback){
            let roleTable = await departmentList()
            let employeeTable = await employeeList()

            let roleArray = []
            for (let i = 0; i < roleTable.length; i++) {
                let roles = roleTable[i].title;
                roleArray.push(roles);
            }

            let employeeArray = []
            for (let i = 0; i < employeeTable.length; i++) {
                let employees = employeeTable[i].first_name;
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

                    let roleid;
                    for (let i = 0; i < roleTable.length; i++){
                        if (response.role === roleTable[i].title){
                                roleid =  roleTable[i].id;
                        }
                    }
                    let managerid;
                    for (let i = 0; i < employeeTable.length; i++){
                        if (response.manager === employeeTable[i].first_name){
                                managerid =  employeeTable[i].id;
                        }
                    }
                    connection.query(
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
                        callback();
                    }
                )
                })
        };

        module.exports = addEmployee;

        function departmentList() {
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

        function employeeList() {
            return new Promise(function(resolve, reject) {
                connection.query(`SELECT * FROM employee WHERE first_name IS NOT NULL`, function(error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
        }