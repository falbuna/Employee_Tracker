const connection = require('../connection');
const cTable = require('console.table');

function viewAllDepartments(callback){
    connection.query(
    `
    SELECT
    department.id as id,
    department.name as department
    FROM department
        `,
        function(error, data){
            console.table(data);
            callback();
        }
    )};

    module.exports = viewAllDepartments;