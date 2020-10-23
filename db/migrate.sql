-- Remove comments to reset db
-- DROP TABLE users;
-- DROP TABLE objects;
-- DROP TABLE bought;

CREATE TABLE IF NOT EXISTS users (
    name VARCHAR(255) NOT NULL,
    deposit VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password float NOT NULL,
    UNIQUE(email)
    UNIQUE(name)
);

CREATE TABLE IF NOT EXISTS objects (
    user VARCHAR(255) NOT NULL,
    objectname VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS bought (
    user VARCHAR(255) NOT NULL,
    objectname VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL
);