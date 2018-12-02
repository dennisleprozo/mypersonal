select sum(p.price * c.quantity)
from carts c
join product p on p.prod_id = c.prod_id
where users_id = $1;