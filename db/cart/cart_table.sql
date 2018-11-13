CREATE TABLE cart
(
    cust_id INTEGER,
    prod_id INTEGER,
    FOREIGN KEY (cust_id) REFERENCES customer (cust_id),
    FOREIGN KEY (prod_id) REFERENCES product (prod_id),
    cart_id SERIAL PRIMARY KEY
) 