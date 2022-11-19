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
	
-- exercise 1
-- #1
SELECT name FROM language 	
-- #2
SELECT title, description, name
FROM film
INNER JOIN language
ON film.language_id = language.language_id

SELECT title, description, name
FROM film
LEFT JOIN language
ON film.language_id = language.language_id

SELECT title, description, name
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id
-- #3
CREATE TABLE new_film (
id SERIAL PRIMARY KEY,
name VARCHAR (30)
)
INSERT INTO new_film(name)
VALUES
('Titanic'),
-- ('Dear John')
('Forrest Gump');
SELECT * FROM new_film;
-- #4
CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY,
film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE ON UPDATE CASCADE,
language_id INTEGER REFERENCES language(language_id) ON DELETE SET NULL ON UPDATE CASCADE,
tytle VARCHAR(50),
score SMALLINT,
review_text VARCHAR,
last_apdate DATE  DEFAULT CURRENT_DATE	
);

INSERT INTO customer_review(film_id,language_id,tytle,score,review_text)
VALUES
((SELECT id FROM new_film WHERE name = 'Titanic'),
(SELECT language_id FROM language WHERE name = 'English'),
 'Titanic', 4, 'bla bla bla'),
((SELECT id FROM new_film WHERE name = 'Dear John'),
(SELECT language_id FROM language WHERE name = 'English'),
'Dear John', 3, 'bla bla bla');
-- DROP TABLE customer_review;

DELETE FROM new_film WHERE name = 'Titanic';
SELECT * FROM customer_review;


--Exercise 2
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
SELECT * FROM language;
SELECT * FROM film;
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name ='Italian')
WHERE title = 'Factory Dragon';
-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
SELECT * FROM customer 
SELECT * FROM store 
-- foreign keys are: store_id from store table & address_id from address table
-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;
-- VERY EASY TO DELETE
-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title FROM film
INNER JOIN film_actor ON film_actor.film_id = film.film_id
INNER JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE first_name = 'Penelope' AND last_name = 'Monroe' AND description ILIKE '%sumo wrestler%'
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title FROM film
INNER JOIN film_category ON film_category.film_id = film.film_id
INNER JOIN category ON category.category_id = film_category.film_id
WHERE  category.name ILIKE 'documentary' 
AND film.length <60
AND film.rating = 'R'
-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT title FROM film
INNER JOIN inventory ON inventory.film_id = film.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
INNER JOIN payment ON payment.rental_id = rental.rental_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan'
AND payment.amount > 4.00
AND rental.return_date BETWEEN  '2005-07-28' AND '2005-08-01' 
SELECT * FROM rental
-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “c” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT film.title FROM film
INNER JOIN inventory ON inventory.film_id = film.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan'
AND (film.description ILIKE '%boat%' OR film.title ILIKE '%boat%')
AND replacement_cost > (SELECT AVG(replacement_cost) FROM film)