const mysql = require('mysql');

// This is for the connection to the MySQL database that holds all of the information for the queries.
const connectionConfig = {
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: 'employeedb'
};

const connection = mysql.createConnection(connectionConfig);

module.exports = connection;