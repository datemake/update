SELECT * FROM reviews 
JOIN users ON reviews.user_id = users.user_id
WHERE reviews.dates_id = $1