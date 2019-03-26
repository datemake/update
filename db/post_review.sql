INSER INTO reviews(review,dates_id,user_id)
VALUES($1,$2,$3) returning *;