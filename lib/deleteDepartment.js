const connection = require('../connection');
const inquirer = require('inquirer');

        // This is for the function to delete a department.
        async function deleteDepartment(callback){
            let departmentTable = await departmentList()
            // This will hold the array for the list of the departments for the inquirer prompt.
            let departmentArray = []
            for (let i = 0; i < departmentTable.length; i++) {
                let departments = departmentTable[i].name;
                departmentArray.push(departments);
            }

            inquirer
                .prompt([
                    {
                        name: "department",
                        type: "rawlist",
                        message: "What is the name of the department you want to delete?",
                        choices: departmentArray
                    },
                ])
                .then(function(response){
                    // This will get the id for the selected department to deleted.
                    let departmentid;
                    for (let i = 0; i < departmentTable.length; i++){
                        if (response.department === departmentTable[i].name){
                                departmentid =  departmentTable[i].id;
                        }
                    }

                    connection.query(
                        // This is for the query that will delete the department.
                        "DELETE FROM department WHERE department.id = ?",
                    [departmentid],
                    function(err){
                        if (err) throw err;
                        console.log("Department has been deleted.");
                        // This is the callback for the initial inquirer prompt.
                        callback();
                    }
                )
                })
        };
        
        module.exports = deleteDepartment;

        // This is the promise that will get the list of all the departments for the inquirer prompt.        
        function departmentList() {
            return new Promise(function(resolve, reject) {
                connection.query(`SELECT * FROM department`, function(error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
        }
