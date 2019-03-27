INSERT INTO food(food_name,food_photo,food_google_place_id, food_description)
VALUES($1,$2,$3, $4) RETURNING food_id;