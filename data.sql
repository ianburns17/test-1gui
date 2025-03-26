
CREATE ROLE person WITH LOGIN PASSWORD 'w';

ALTER DATABASE taskm OWNER TO person;
GRANT CREATE ON DATABASE taskm TO person;
psql --host=localhost --dbname=taskm --username=person

DB_HOST=localhost
DB_USER=person
DB_PASSWORD=w
DB_NAME=taskm
DB_PORT=5432
