INSERT INTO orders
(users_id, active)
VALUES ($1, true) 
returning *;
