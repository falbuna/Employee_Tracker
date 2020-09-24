const connection = require('../connection');
const cTable = require('console.table');

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