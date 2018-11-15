-- customer_table
CREATE TABLE customer 
(
    cust_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    user_name VARCHAR(100),
    password VARCHAR(180),
    address VARCHAR(300)
)
-- product_table
CREATE TABLE product
(
    prod_id SERIAL PRIMARY KEY,
    prod_type VARCHAR(100),
    description VARCHAR(500),
    rating VARCHAR(20),
    price DECIMAL,
    img TEXT
)
-- cart_table
CREATE TABLE cart
(
    cust_id INTEGER,
    prod_id INTEGER,
    FOREIGN KEY (cust_id) REFERENCES customer (cust_id),
    FOREIGN KEY (prod_id) REFERENCES product (prod_id),
    cart_id SERIAL PRIMARY KEY
) 
-- getuser
select * from customer

-- find_user
select *
from customer
where user_name = $1;

-- create_customer
INSERT INTO customer
(user_name, password)
VALUES 
($1, $2) 
returning *;

-- dummy customer
INSERT INTO customer
(first_name, last_name, user_name, password, address)
VALUES 
('Dennis', 'Leprozo', 'dennis', 'd', '8975 West Warm Springs Road, LV NV') 
returning *;