
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
