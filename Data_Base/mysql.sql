CREATE USER 'User1'@'host' IDENTIFIED BY 'password111';
CREATE USER 'User2'@'host' IDENTIFIED BY 'password222';
SET PASSWORD FOR 'User1'@'host' = PASSWORD('aaaaa111');
CREATE DATABASE mydb;
GRANT ALL PRIVILEGES ON mydb.* TO ‘User1’@’host’;
GRANT VIEW, ALTER PRIVILEGES ON mydb.* TO ‘User1’@’host’;
SHOW DATABASE;
SET PASSWORD FOR 'User2'@'host' = PASSWORD('aaaaa1211');

