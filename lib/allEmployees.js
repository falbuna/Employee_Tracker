const connection = require('../connection');
const cTable = require('console.table');

// This is the function to view all employees that will get exported to the employeeCoordinator.js file.
function viewAllEmployees(callback){
    connection.query(
    // This is for query to view all the employees.
    `
    SELECT
    e.id as id,
    e.first_name as first_name,
    e.last_name as last_name,
    role.title as title,
    department.name as department,
    role.salary as salary,
    CONCAT(m.first_name,' ',m.last_name) as manager
    FROM employee e
    INNER JOIN role ON
        role.id = e.role_id
    INNER JOIN department ON 
        department.id = role.department_id
    LEFT JOIN employee m ON
        e.manager_id = m.id;
        `,
        function(error, data){
            console.table(data);
            // This is the callback for the initial inquirer prompt.
            callback();
        }
    )
};


module.exports = viewAllEmployees;