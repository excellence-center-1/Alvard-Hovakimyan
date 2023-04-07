CREATE USER User1 PASSWORD 'myuser1';
CREATE USER User2 WITH PASSWORD 'myuser2';
\du
ALTER USER User1 PASSWORD 'myuser2';
CREATE DATABASE firstdb;
GRANT ALL PRIVILEGES ON DATABASE firstdb to User1;
GRANT VIEW AND SELECT ON DATABASE firstdb to User2;
\l
\du
ALTER USER User2 PASSWORD 'myuser1';
