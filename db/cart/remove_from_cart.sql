DELETE FROM carts
WHERE users_id = $1
AND carts_id = $2;