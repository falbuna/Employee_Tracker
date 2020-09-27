const connection = require('../connection');
const inquirer = require('inquirer');

        // This is for the function to delete a role.
        async function deleteRole(callback){
            let roleTable = await roleList()
            // This will hold the array for the list of the roles for the inquirer prompt.
            let roleArray = []
            for (let i = 0; i < roleTable.length; i++) {
                let roles = roleTable[i].title;
                roleArray.push(roles);
            }


            inquirer
                .prompt([
                    {
                        name: "role",
                        type: "rawlist",
                        message: "What is the name of the role want to delete?",
                        choices: roleArray
                    },
                ])
                .then(function(response){
                    // This will get the id for the selected role to be deleted.
                    let roleid;
                    for (let i = 0; i < roleTable.length; i++){
                        if (response.role === roleTable[i].title){
                                roleid =  roleTable[i].id;
                        }
                    }

                    connection.query(
                        // This is for the query that will delete the role.
                        "DELETE FROM role WHERE role.id = ?",
                    [roleid],
                    function(err){
                        if (err) throw err;
                        console.log("Role has been deleted.");
                        // This is the callback for the initial inquirer prompt.
                        callback();
                    }
                )
                })
        };
        
        module.exports = deleteRole;
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