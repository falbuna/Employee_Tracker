const mysql = require('mysql');

const connectionConfig = {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: 'employeedb'
};

const connection = mysql.createConnection(connectionConfig);

module.exports = connection;