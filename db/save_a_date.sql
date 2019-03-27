INSERT INTO saveddates(dates_id,user_id)
VALUES($1,$2) returning *;