SELECT p.prod_id, p.price, p.img, p.prod_name, p.description, c.quantity, c.cart_id
FROM carts c
JOIN product p ON p.prod_id = c.prod_id
WHERE users_id = $1
ORDER BY p.prod_id;