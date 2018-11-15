-- users_table_seed.sql
create table users 
(
    id serial primary key,
    user_name varchar(180),
    email varchar(180),
    picture text,
    auth_id text
);

-- product.product_table.sql
CREATE TABLE product
(
    prod_id SERIAL PRIMARY KEY,
    prod_type VARCHAR(100),
    description VARCHAR(500),
    rating VARCHAR(20),
    price DECIMAL,
    img TEXT
);

-- cart.cart_table.sql
CREATE TABLE cart
(
    id INTEGER,
    prod_id INTEGER,
    FOREIGN KEY (id) REFERENCES users (id),
    FOREIGN KEY (prod_id) REFERENCES product (prod_id),
    cart_id SERIAL PRIMARY KEY
);

-- get_user_by_id.sql
select *
from users
where id = 1;

-- find_user.sql
select * 
from users
where auth_id = $1;

-- dummy db for users table
-- INSERT INTO users
-- (user_name, email, picture, auth_id)
-- VALUES 
-- ('Dennis Leprozo', 'dennisvleprozo@gmail.com', 'image_url', 'github|12345678') 
-- returning *;