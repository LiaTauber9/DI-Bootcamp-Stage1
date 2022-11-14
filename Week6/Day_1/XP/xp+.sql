-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1255'
--     LC_CTYPE = 'English_United States.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
CREATE TABLE students(
id SERIAL,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL,
	birth_date DATE
);
INSERT INTO students (first_name, last_name, birth_date) 
VALUES
('Marc', 'Benichou', '1998/11/2'),
('Yoan',	'Cohen',	'2010/12/03'),
('Lea',	'Benichou',	'1987/07/27'),
('Amelia',	'Dux',	'1996/04/07'),
('David',	'Grez',	'2003/06/14'),
('Omer',	'Simpson',	'1980/10/03');
SELECT * FROM students;
SELECT first_name, last_name FROM students;
SELECT first_name, last_name FROM students WHERE id=2;
SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou';  
SELECT first_name, last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou';  
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%' ;  
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%' ; 
SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a' ;
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_' ;  
SELECT first_name, last_name FROM students WHERE id=1 OR id=3;
SELECT * FROM students WHERE birth_date >= '2000/01/01';











