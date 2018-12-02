DELETE FROM carts
WHERE users_id = $1
AND cart_id = $2;