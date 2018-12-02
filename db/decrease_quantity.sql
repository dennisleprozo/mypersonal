update carts
set quantity = $1 - 1
where cart_id = $2 
and users_id = $3;