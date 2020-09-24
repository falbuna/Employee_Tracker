const mysql = require('mysql');

const connectionConfig = {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: 'employeedb'
};

const connection = mysql.createConnection(connectionConfig);

function viewAllEmployees(){
    connection.query(
    `
    SELECT
    e.id as id,
    e.first_name as first_name,
    e.last_name as last_name,
    role.title as title,
    department.name as department,
    role.salary as salary,
    m.first_name as manager
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
        }
    )};


module.exports = viewAllEmployees;