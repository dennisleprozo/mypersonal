CREATE TABLE carts (
cart_id SERIAL PRIMARY KEY, 
prod_id INTEGER REFERENCES product (prod_id), 
users_id INTEGER REFERENCES users (users_id),
order_id INTEGER REFERENCES orders (order_id),
quantity INTEGER, 
price DECIMAL
);