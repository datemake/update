INSERT INTO activity(activity_description,activity_photo,activity_google_place_id)
VALUES($1,$2,$3) RETURNING activity_id;