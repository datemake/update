INSERT INTO reviews(review, dates_id, user_id, image_url, rating)
VALUES($1,$2,$3, $4, $5) returning *;