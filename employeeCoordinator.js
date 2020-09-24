const mysql = require('mysql');
const initialPrompt = require("./inquirerPrompts")

const connectionConfig = {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: 'employeedb'
};

const connection = mysql.createConnection(connectionConfig);

connection.connect(function(err){
    if (err) throw err;
    initialPrompt();
});


