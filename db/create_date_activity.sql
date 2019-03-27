INSERT INTO activity(activity_name,activity_photo,activity_google_place_id, activity_description)
VALUES($1,$2,$3, $4) RETURNING activity_id;