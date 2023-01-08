DROP DATABASE IF EXISTS cats_dev;
CREATE DATABASE cats_dev;

\c cats_dev;
CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name TEXT,
    parent_name TEXT,
    age INTEGER,
    member_since DATE,
    hometown TEXT,
    breed TEXT,
    image VARCHAR(2083)
)
