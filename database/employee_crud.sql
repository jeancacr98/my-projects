CREATE DATABASE employee_crud;

USE employee_crud;

--Creación de las tablas
CREATE TABLE marital_status (
    marital_status_id INT IDENTITY PRIMARY KEY,
    description VARCHAR(20) UNIQUE
);

CREATE TABLE position (
    position_id INT IDENTITY PRIMARY KEY,
    description VARCHAR(20) UNIQUE
);

CREATE TABLE employee (
    employee_id INT IDENTITY PRIMARY KEY,
    dni VARCHAR(20) UNIQUE,
    name VARCHAR(150),
    email VARCHAR(100),
    birth_date DATE,
	marital_status_id INT,
	position_id INT,
	is_deleted BIT DEFAULT 0,
    FOREIGN KEY (marital_status_id) REFERENCES marital_status(marital_status_id),
	FOREIGN KEY (position_id) REFERENCES position(position_id)
);

--Insertar datos
INSERT INTO [dbo].[marital_status]
           ([description])
     VALUES
           ('Single'),
		   ('Married'),
		   ('Divorced'),
		   ('Widowed');

INSERT INTO [dbo].[position]
           ([description])
     VALUES
           ('CEO'),
		   ('Project Manager'),
		   ('Accountant'),
		   ('Developer'),
		   ('Lawyer'),
		   ('Recruiter');

INSERT INTO [dbo].[employee]
           ([dni]
           ,[name]
           ,[email]
           ,[birth_date]
           ,[marital_status_id]
           ,[position_id]
		   ,[is_deleted])
     VALUES
           ('305430123'
           ,'Fabián Monge'
           ,'fabian2013@gmail.com'
           ,'1999-11-11'
           ,1
           ,6
		   ,0);

--Prueba de JOINS
SELECT [e].[employee_id]
      ,[e].[dni]
      ,[e].[name]
      ,[e].[email]
      ,[e].[birth_date]
	  ,[ms].[description] as [marital_status]
      ,[p].[description] as [position]
  FROM employee as e
  JOIN marital_status as ms
  ON e.marital_status_id = ms.marital_status_id
  JOIN position as p
  ON e.position_id = p.position_id
  WHERE e.is_deleted = 0;