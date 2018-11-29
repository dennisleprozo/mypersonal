INSERT INTO users
(
    user_name, 
    email, 
    picture, 
    auth_id
)
VALUES
($1, $2, $3, $4)
returning *;