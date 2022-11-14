-- SCHEMA: public

-- DROP SCHEMA IF EXISTS public ;

-- CREATE SCHEMA IF NOT EXISTS public
--     AUTHORIZATION pg_database_owner;

-- COMMENT ON SCHEMA public
--     IS 'standard public schema';

-- GRANT USAGE ON SCHEMA public TO PUBLIC;

-- GRANT ALL ON SCHEMA public TO pg_database_owner;
-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )
CREATE TABLE items(
	item_id SERIAL PRIMARY KEY,
	item VARCHAR (50) NOT NULL,
	price SMALLINT NOT NULL
);
CREATE TABLE customers(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL
);
-- INSERT INTO table(column1, column2, …)
-- VALUES (value1, value2, …);
INSERT INTO items (item,price) VALUES ('Small Desk', 100);
INSERT INTO items (item,price) VALUES ('Larg Desk', 300);
INSERT INTO items (item,price) VALUES ('Fan', 80);
INSERT INTO customers (first_name, last_name) VALUES ('Greg', 'Jones');
INSERT INTO customers (first_name, last_name) VALUES ('Sandra', 'Jones');
INSERT INTO customers (first_name, last_name) VALUES ('Scott', 'Scott');
INSERT INTO customers (first_name, last_name) VALUES ('Trevor', 'Green');
INSERT INTO customers (first_name, last_name) VALUES ('Melanie', 'Jonson');

-- SELECT first_name FROM actors WHERE last_name LIKE '%y'
-- SELECT * FROM actors WHERE age > '1960-01-01' LIMIT 3 OFFSET 2;
-- SELECT * FROM actors WHERE age > '1960-01-01' ORDER BY first_name ASC
SELECT * FROM items;
SELECT * FROM customers;
SELECT * FROM items WHERE price > 80; 
SELECT * FROM items WHERE price <= 300;
SELECT * FROM customers WHERE last_name = 'Smith';
SELECT * FROM customers WHERE last_name = 'Jones';
SELECT * FROM customers WHERE first_name != 'Scott';



