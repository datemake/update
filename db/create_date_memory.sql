INSERT INTO memory_maker(memory_description,memory_photo,memory_google_place_id)
VALUES($1,$2,$3) RETURNING memory_id;