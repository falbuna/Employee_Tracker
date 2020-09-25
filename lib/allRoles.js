const connection = require('../connection');
const cTable = require('console.table');

function viewAllRoles(callback){
    connection.query(
    `
    SELECT
		role.id as id,
        role.title as title,
        role.salary as salary,
        department.name as department
    FROM role
    INNER JOIN department ON
		department.id = role.department_id;
        `,
        function(error, data){
            console.table(data);
            callback();
        }
    )};

    module.exports = viewAllRoles;