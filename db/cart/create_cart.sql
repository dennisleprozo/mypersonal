INSERT INTO carts
(users_id)
VALUES
($1)
returning *;