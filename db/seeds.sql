INSERT INTO department
  (name)
VALUES
  ('Sales'),
  ('Sales'),
  ('Engineering'),
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Legal'),
  ('Engineering');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Sales Lead', '100000',1),
  ('Salesperson', '80000',2),
  ('Lead Engineer', '150000',3),
  ('Software Engineer', '120000',4),
  ('Accountant', '125000',5),
  ('Legal Team Lead', '250000',6),
  ('Lawyer', '190000',7),
  ('Lead Engineer', '150000',8);


INSERT INTO employee
  (first_name, last_name, role_id)
VALUES
  ('John', 'Doe',1),
  ('Mike', 'Chan',2),
  ('Ashley', 'Rodriguez',3),
  ('Kevin', 'Tupik',4),
  ('Malia', 'Brown',5),
  ('Sarah', 'Lourd',6),
  ('Tom', 'Allen',7),
  ('Christian', 'Eckenrode',8);
  