CREATE DATABASE polly;

CREATE TABLE polls(
  poll_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  option varchar[],
  score integer[]
);




INSERT INTO polls (title,option) VALUES ('uno','{lmao,wwq}');
