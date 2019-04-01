SELECT * FROM dates
    JOIN saveddates ON dates.date_id = saveddates.dates_id
    JOIN activity ON dates.activity_id = activity.activity_id where saveddates.user_id = $1;
