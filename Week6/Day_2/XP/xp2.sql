-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

CREATE DATABASE dvdrental
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1255'
    LC_CTYPE = 'English_United States.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
-- 	Exercise 2
SELECT * FROM customer;
SELECT (first_name, last_name) AS full_name FROM customer;
SELECT create_date FROM customer GROUP BY create_date;
SELECT * FROM customer ORDER BY first_name DESC;
SELECT film_id, title,description, release_year,rental_rate FROM film ORDER BY rental_rate ASC;
SELECT * FROM address;
SELECT address AS Texas_address, phone FROM address WHERE district = 'Texas';
SELECT * FROM film WHERE film_id = 15 OR film_id = 150;
SELECT * FROM film WHERE title = 'Titanic';
SELECT * FROM film ORDER BY replacement_cost ASC LIMIT 10;
SELECT * FROM film ORDER BY replacement_cost ASC LIMIT 10 OFFSET 10;
SELECT * FROM payment ORDER BY amount ASC;

SELECT first_name, last_name, amount, payment_date
FROM customer
INNER JOIN payment
ON payment.customer_id = customer.customer_id;

SELECT first_name,
       last_name
FROM customer c
WHERE NOT EXISTS
    (SELECT 1
     FROM payment p
     WHERE p.customer_id = c.customer_id
       AND amount > 11 )
ORDER BY first_name,
         last_name;

SELECT title, film_id FROM film
WHERE NOT EXISTS 
(SELECT film_id FROM inventory 
 WHERE inventory.film_id = film.film_id);


SELECT city, country
FROM city
INNER JOIN country
ON city.country_id = country.country_id

--  You want to be able to see how your sellers have been doing? 
--  Write a query to get the customer’s id, names (first and last), 
--  the amount and the date of payment 
--  ordered by the id of the staff member who sold them the dvd.









