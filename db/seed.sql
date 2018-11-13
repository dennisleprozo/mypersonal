CREATE TABLE customer 
(
    cust_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    user_name VARCHAR(100),
    password VARCHAR(180),
    address VARCHAR(300)
)

CREATE TABLE product
(
    prod_id SERIAL PRIMARY KEY,
    prod_type VARCHAR(100),
    description VARCHAR(500),
    rating VARCHAR(20),
    price DECIMAL,
    img TEXT
)

CREATE TABLE cart
(
    cust_id INTEGER,
    prod_id INTEGER,
    FOREIGN KEY (cust_id) REFERENCES customer (cust_id),
    FOREIGN KEY (prod_id) REFERENCES product (prod_id),
    cart_id SERIAL PRIMARY KEY
) 