-- Department table
INSERT INTO department (name) VALUES
('Sales'),
('Marketing'),
('Finance');

-- Role table
INSERT INTO role (title, salary, department_id) VALUES
('Sales Representative', 50000.00, 1),
('Marketing Coordinator', 45000.00, 2),
('Financial Analyst', 60000.00, 3);

-- Employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('David', 'Johnson', 3, 1),
('Emily', 'Williams', 1, 2),
('Michael', 'Brown', 3, 2);