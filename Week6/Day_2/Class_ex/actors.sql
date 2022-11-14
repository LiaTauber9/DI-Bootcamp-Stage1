-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1255'
--     LC_CTYPE = 'English_United States.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
SELECT * FROM actors

UPDATE actors
SET first_name = 'Maty'
WHERE first_name = 'Matt'
RETURNING *;

UPDATE actors
SET number_oscars = 4
WHERE first_name = 'George' AND last_name = 'Clooney'
RETURNING *

ALTER TABLE actors RENAME COLUMN age TO birthDate

DELETE FROM actors WHERE actor_id=2
RETURNING *
