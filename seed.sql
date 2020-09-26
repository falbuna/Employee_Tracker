INSERT INTO department (id , name)
VALUES ( 1, "Operations");

INSERT INTO department (id, name)
VALUES (2, "Engineering");

INSERT INTO department (id, name)
VALUES (3, "Finance");

INSERT INTO department (id, name)
VALUES (4, "Legal");

INSERT INTO department (id, name)
VALUES (5, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Operations Manager", 160000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Assistant to the Manager", 90000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Lead Engineer", 150000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUE (4, "Software Engineer", 120000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUE (5, "Lead Accountant", 110000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUE (6, "Accountant", 90000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUE (7, "Lead Legal Team", 220000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUE (8, "Lawyer", 190000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUE (9, "Lead Sales", 100000, 5);

INSERT INTO role (id, title, salary, department_id)
VALUE (10, "Salesperson", 80000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (1, "Michael", "Scarner", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (2, "Dwight", "Kurtis", 2, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (3, "Hans", "Yeager", 10, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (4, "Mindy", "Webster", 4, 8);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (5, "Blaire", "Waldorf", 9, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (6, "Mark", "Drisskel", 6, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (7, "Ashe", "Kled", 7, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (8, "Lawrence", "Covancole", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (9, "Ervin", "Johanson", 8, 7);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUE (10, "Josephine", "Yuli", 5, 1);