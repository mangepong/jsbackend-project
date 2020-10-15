DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
    name VARCHAR(255) NOT NULL,
    deposit VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password float NOT NULL,
    UNIQUE(email)
    UNIQUE(name)
);