const mysql = require('mysql');

const connectionConfig = {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: 'employeedb'
};

const connection = mysql.createConnection(connectionConfig);


function viewAllDepartments(){
    connection.query(
    `
    SELECT
    department.name as department
    FROM department
        `,
        function(error, data){
            console.table(data);
        }
    )};

    module.exports = viewAllDepartments;