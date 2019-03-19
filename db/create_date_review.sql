INSERT INTO reviews(review,dates_id,user_id,review_photo)
VALUES($1,$2,$3,$4) returning *;