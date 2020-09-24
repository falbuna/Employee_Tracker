const mysql = require('mysql');
const initialPrompt = require("../inquirerPrompts")


const connectionConfig = {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: 'employeedb'
};

const connection = mysql.createConnection(connectionConfig);


function addDepartment(){
    connection.query("INSERT INTO department (name) values ('Security')",
        function(error){
            initialPrompt();
        }
    )};

    module.exports = addDepartment;