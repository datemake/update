INSERT INTO memory_maker(memory_name,memory_photo,memory_google_place_id, memory_description)
VALUES($1,$2,$3, $4) RETURNING memory_id;