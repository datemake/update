SELECT * FROM dates
    JOIN users ON users.user_id = dates.user_id
    JOIN activity ON dates.activity_id = activity.activity_id
    JOIN food ON dates.food_id = food.food_id
    JOIN memory_maker ON dates.memory_id = memory_maker.memory_id 
where dates.date_id = $1;