CREATE TABLE cart
(
    id INTEGER,
    prod_id INTEGER,
    FOREIGN KEY (id) REFERENCES users (id),
    FOREIGN KEY (prod_id) REFERENCES product (prod_id),
    cart_id SERIAL PRIMARY KEY
);