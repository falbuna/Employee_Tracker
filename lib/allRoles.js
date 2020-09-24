const connection = require('../connection');
const cTable = require('console.table');

function viewAllRoles(){
    connection.query(
    `
    SELECT
		role.id as id,
        role.title as title,
        role.salary as salary
    FROM role
        `,
        function(error, data){
            console.table(data);
        }
    )};

    module.exports = viewAllRoles;