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
    img TEXT,

    img2 TEXT,
    prod_name VARCHAR(100)
);

-- cart.cart_table.sql and product
CREATE TABLE carts (
cart_id serial primary key, 
prod_id integer REFERENCES product (prod_id), 
users_id integer REFERENCES users (users_id),
order_id integer REFERENCES orders (order_id),
quantity integer, 
price decimal
);

-- orders.orders_table
CREATE TABLE orders (
order_id serial primary key,
prod_id integer REFERENCES product (prod_id), 
users_id integer REFERENCES users (users_id)
)

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

-- back view image
ALTER TABLE product
ADD img2 text;

ALTER TABLE product
ADD prod_name VARCHAR(100);

-- INSERT INTO product(prod_type, description, rating, price, img, img2, prod_name)
-- VALUES('Men Torso', 
-- ' A black casual sweat shirt. This hooded shirt basic shirt matches any jeans and sweat pants.',
-- 'fair', 
-- 25.00,
-- 'https://demo.w3layouts.com/demos_new/17-01-2017/groovy_apparel-demo_Free/435669694/web/images/8-front.jpg',
-- 'https://demo.w3layouts.com/demos_new/17-01-2017/groovy_apparel-demo_Free/435669694/web/images/8-back.jpg',
-- 'The Bae'
--  );


-- INSERT INTO product(prod_type, description, rating, price, img, img2, prod_name)
-- VALUES('Men Torso', 
-- 'An essential wardrobe staple, this sweatshirt is built from washed brushed cotton for a clean finish.',
-- 'superb', 
-- 20.00,
-- 'https://demo.w3layouts.com/demos_new/17-01-2017/groovy_apparel-demo_Free/435669694/web/images/1-front.jpg',
-- 'https://demo.w3layouts.com/demos_new/17-01-2017/groovy_apparel-demo_Free/435669694/web/images/1-back.jpg',
-- 'Robin Hoodie');

 
-- INSERT INTO product(prod_type, description, rating, price, img, img2, prod_name)
-- VALUES('Men Torso', 
-- 'This pure cotton sweatshirt is built with a tonal stripe down the sleeves and subtle destroyed detailing at the collar. It is embellished with embroidery in metallic thread.',
-- 'good', 
-- 35.00,
-- 'https://demo.w3layouts.com/demos_new/17-01-2017/groovy_apparel-demo_Free/435669694/web/images/2-front.jpg',
-- 'https://demo.w3layouts.com/demos_new/17-01-2017/groovy_apparel-demo_Free/435669694/web/images/2-back.jpg', 'Dark Night' )



-- get user with cart
SELECT p.prod_id, p.price, p.img, p.prod_name, p.description, c.quantity, c.cart_id
FROM carts c
JOIN product p ON p.prod_id = c.prod_id
WHERE users_id = $1
ORDER BY p.prod_id;