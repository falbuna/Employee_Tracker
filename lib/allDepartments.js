const connection = require('../connection');
const cTable = require('console.table');

// This is the function to view all departments that will get exported to the employeeCoordinator.js file.
function viewAllDepartments(callback){
    connection.query(
    // This is the query to view all the departments.
    `
    SELECT
    department.id as id,
    department.name as department
    FROM department
        `,
        function(error, data){
            console.table(data);
            // This is the callback for the initial inquirer prompt.
            callback();
        }
    )};

    module.exports = viewAllDepartments;