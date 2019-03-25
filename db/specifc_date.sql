SELECT * FROM dates
    JOIN users ON users.user_id = dates.user_id
    JOIN activity ON dates.activity_id = activity.activity_id where dates.date_id = $1;