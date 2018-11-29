CREATE TABLE orders (
order_id SERIAL PRIMARY KEY,
prod_id integer REFERENCES product (prod_id), 
users_id integer REFERENCES users (users_id)
)