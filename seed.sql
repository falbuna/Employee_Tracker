DROP DATABASE IF EXISTS  employeedb;

CREATE database employeedb;

USE employeedb;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT(10),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT(10),
    manager_id INT(10),
    PRIMARY KEY (id)
);

INSERT INTO department (id , name)
VALUES ( 1, "Engineering");

INSERT INTO department (id, name)
VALUES (2, "Sales");

INSERT INTO department (id, name)
VALUES (3, "Finance");

INSERT INTO department (id, name)
VALUES (4, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Lead Engineer", 150000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUE (2, "Software Engineer", 10000, 1)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (1, "Francis", "Albuns", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (2, "Mike", "Doe", 2, 1)