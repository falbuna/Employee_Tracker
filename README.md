# Employee Tracker

Homework for Week 12

## Introduction

This application uses Node and MySQL to view and manage the departments, roles, and employees in a company to store information in an employee database. This will allow a buisness owner to better organize and plan their buisness.

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Questions](#Questions)

## Description

This application uses Node.js and the Inquirer package to get and store information to a database on MySQL.

## Installation

In order to install this application, the user will need to have Node.js installed on their computer. The user will also need to have the Inquirer and MySQL package installed in the folder that contains this application. Lastly, the user will need to have MySQL workbench and MAMP installed on their computer to access the schema and seed for the MySQL database.

## Usage

To start the application, the user will need to input "node employeeCoordinator.js" in the console.

![Windows Powershell with node employeeCoordinator.js](https://github.com/falbuna/Employee_Tracker/blob/master/Assets/1nodeFirst.png)

The user will then be asked with a list of actions that the user can do. They can view all the employees, departments, or roles. They can add or delete a department, role, or employee. Or they can update an employee's role or their manager.

![View all Employees table and list all actions.](https://github.com/falbuna/Employee_Tracker/blob/master/Assets/2list.png)

If the user wants to add a department, they will be asked with the name of the new department. If the user wants to add a role, they will be asked with the title of the new role, the salary of the new role, and the department of the new role. If the user wants to add a new employee, they will be asked for the new employee's first and last name, their role, and the manager for the new employee.

![Adding a department, role, or employee.](https://github.com/falbuna/Employee_Tracker/blob/master/Assets/3add.png)

If the user wants to update an employee's current role, they will be asked for the employee's name, the new role, and who their new manager will be for the new role. If the user wants to update an employee's manager, they will be asked for the employee they would like to update, and the new manager for that employee.

![Updating an employees Role or manager](https://github.com/falbuna/Employee_Tracker/blob/master/Assets/4update.png)

If the user wants to delete an employee, they will be asked for the name of the employee they want to delete. If the user wants to delete a role, they will be asked for the role that they want to delete. If the user wants to delete a department, they will be asked for the department that they want to delete.

![Deleting a department, role, or employee](https://github.com/falbuna/Employee_Tracker/blob/master/Assets/5delete.png)

## Questions

If you have any questions regarding this application, please reach me at: falbuna1@gmail.com

My Github can be found here: [https://github.com/falbuna/](https://github.com/falbuna/)