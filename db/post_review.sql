INSERT INTO reviews(review, dates_id, user_id, images, rating)
VALUES($1,$2,$3, $4, $5);


UPDATE dates 
    SET rating = ( SELECT ROUND( AVG(rating), 1) FROM reviews WHERE dates_id = $2)
WHERE 
	date_id = $2;

-- returning *;

