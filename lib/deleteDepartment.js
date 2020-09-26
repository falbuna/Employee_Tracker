const connection = require('../connection');
const inquirer = require('inquirer');

        async function deleteDepartment(callback){
            let departmentTable = await departmentList()

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

                    let departmentid;
                    for (let i = 0; i < departmentTable.length; i++){
                        if (response.department === departmentTable[i].name){
                                departmentid =  departmentTable[i].id;
                        }
                    }

                    connection.query(
                        "DELETE FROM department WHERE department.id = ?",
                    [departmentid],
                    function(err){
                        if (err) throw err;
                        console.log("Department has been deleted.");
                        callback();
                    }
                )
                })
        };
        
        module.exports = deleteDepartment;

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
