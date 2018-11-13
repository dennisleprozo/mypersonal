CREATE TABLE customer 
(
    cust_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    user_name VARCHAR(100),
    password VARCHAR(180),
    address VARCHAR(300)
)