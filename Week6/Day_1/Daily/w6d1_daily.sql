-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

CREATE DATABASE "Hollywood"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1255'
    LC_CTYPE = 'English_United States.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
SELECT * FROM actors;
INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
VALUES
('Angelina', 'Jolie', '1975-06-04', 1),
('George', 'Clooney', '1961-06-05', 2),
('Jennifer', 'Aniston','1969-02-11', 0);
SELECT COUNT(first_name) AS rows_sum FROM actors;

