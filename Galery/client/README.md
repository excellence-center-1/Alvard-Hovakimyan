# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Runing code
### DataB info
#### create user and db
go psql and run this code
CREATE USER myuser2 WITH PASSWORD 'mypass';
GRANT ALL PRIVILEGES ON DATABASE your_database_name TO myuser2;
CREATE DATABASE pole;
GRANT ALL PRIVILEGES ON DATABASE pole TO myuser2;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO myuser2;
 #### create table
 CREATE TABLE user_data (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(100),
  lastName VARCHAR,
  password VARCHAR,
  date_of_birth VARCHAR,
  email VARCHAR UNIQUE
);
