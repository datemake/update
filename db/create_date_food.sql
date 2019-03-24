INSERT INTO food(food_description,food_photo,food_google_place_id)
VALUES($1,$2,$3) RETURNING food_id;