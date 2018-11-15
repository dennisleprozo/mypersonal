INSERT INTO customer
(user_name, password)
VALUES 
($1, $2) 
returning *;