create table users 
(
  id serial primary key,
  user_name varchar(180),
  email varchar(180),
  picture text,
  auth_id text
)