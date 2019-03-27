INSERT INTO reviews(review, dates_id, user_id, image_url)
VALUES($1,$2,$3, $4) returning *;