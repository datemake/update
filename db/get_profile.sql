SELECT * FROM users JOIN savedDates ON users.user_id = savedDates.user_id
 JOIN completedDates where users.user_id = $1
 returning *;