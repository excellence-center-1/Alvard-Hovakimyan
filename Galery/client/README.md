# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Runing code
### DataB info
#### Create user and db
go psql and run this code

CREATE USER myuser2 WITH PASSWORD 'mypass';

CREATE DATABASE pole;

\c pole

GRANT ALL PRIVILEGES ON DATABASE pole TO myuser2;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO myuser2;

 #### Create table
 
 CREATE TABLE user (
 
  id SERIAL PRIMARY KEY,
  
  firstName VARCHAR(100),
  
  lastName VARCHAR,
  
  password VARCHAR,
  
  date_of_birth VARCHAR,
  
  email VARCHAR UNIQUE
  
);

