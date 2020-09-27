const connection = require('../connection');
const cTable = require('console.table');

// This is the function to view all the roles that will get exported to the employeeCoordinator.js file.
function viewAllRoles(callback){
    connection.query(
    // This is for the query to view all roles.
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
            // This is the callback for the initial inquirer prompt.
            callback();
        }
    )};

    module.exports = viewAllRoles;