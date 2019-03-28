SELECT * FROM dates
    JOIN completeddates ON dates.date_id = completeddates.dates_id
    JOIN memory_maker ON dates.memory_id = memory_maker.memory_id where completeddates.user_id = 10;