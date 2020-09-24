const mysql = require('mysql');

const connectionConfig = {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: 'employeedb'
};

const connection = mysql.createConnection(connectionConfig);


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