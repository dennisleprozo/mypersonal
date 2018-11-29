SELECT  * FROM orders
WHERE users_id = $1
AND active = true