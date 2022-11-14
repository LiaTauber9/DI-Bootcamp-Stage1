-- CREATE TABLE city_info (
-- 	event_datetime timestamp NOT NULL, 
-- 	city VARCHAR(50) NOT NULL, 
-- 	temperature decimal NOT NULL,
-- 	light decimal NOT NULL, 
-- 	airquality_raw decimal NOT NULL, 
-- 	sound decimal NOT NULL, 
-- 	humidity decimal NOT NULL, 
-- 	dust decimal NOT NULL
-- );



COPY city_info(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust) 
FROM 'C:\Users\Public\city_info.csv' DELIMITER ',' CSV HEADER;

SELECT * FROM city_info;

-- 1. How many rows per city does the table have ?
SELECT city, COUNT(city) AS city_rows FROM city_info GROUP BY city;
-- 2. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
SELECT AVG(dust)  
-- 3. How many rows does the table have about the city "San Francisco" ?
-- 4. Where and when (only hour) it's the noisiest in the world?.