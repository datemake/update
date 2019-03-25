SELECT * FROM users 
    -- JOIN savedDates ON users.user_id = savedDates.user_id
    -- JOIN completedDates users.user_id = completedDates.user_id
WHERE users.firebase_id = $1