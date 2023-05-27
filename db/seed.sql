-- Department table
INSERT INTO department (id, name) VALUES
(1, 'Sales'),
(2, 'Marketing'),
(3, 'Finance');

-- Role table
INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'Sales Representative', 50000.00, 1),
(2, 'Marketing Coordinator', 45000.00, 2),
(3, 'Financial Analyst', 60000.00, 3);

-- Employee table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'John', 'Doe', 1, NULL),
(2, 'Jane', 'Smith', 2, 1),
(3, 'David', 'Johnson', 3, 1),
(4, 'Emily', 'Williams', 1, 2),
(5, 'Michael', 'Brown', 3, 2);
