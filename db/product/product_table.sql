CREATE TABLE product
(
    prod_id SERIAL PRIMARY KEY,
    prod_type VARCHAR(100),
    description VARCHAR(500),
    rating VARCHAR(20),
    price DECIMAL,
    img TEXT
)