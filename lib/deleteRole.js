const connection = require('../connection');
const inquirer = require('inquirer');

        async function deleteRole(callback){
            let roleTable = await roleList()

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

                    let roleid;
                    for (let i = 0; i < roleTable.length; i++){
                        if (response.role === roleTable[i].title){
                                roleid =  roleTable[i].id;
                        }
                    }

                    connection.query(
                        "DELETE FROM role WHERE role.id = ?",
                    [roleid],
                    function(err){
                        if (err) throw err;
                        console.log("Role has been deleted.");
                        callback();
                    }
                )
                })
        };
        
        module.exports = deleteRole;

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