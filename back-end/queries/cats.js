const db = require("../db/dbConfig.js");

const getAllCats = async () => {
    try {
        const allCats = await db.any("SELECT * FROM cats");
        return allCats;
    } catch (err) {
        return err;
    }
}

const getCat = async (id) => {
    try {
        const oneCat = await db.one("SELECT * FROM cats WHERE id=$1", id);
        return oneCat;
    } catch (err) {
        return err;
    }
}

const createCat = async (cat) => {
    const {name, parent_name, age, member_since, hometown, breed, image} = cat;
    let newCatData;

    if(!image) {
        newCatData = await db.one(
            "INSERT INTO cats (name, parent_name, age, member_since, hometown, breed, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [name, parent_name, age, member_since, hometown, breed,"https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"]
        );
    } else {
        newCatData = await db.one(
            "INSERT INTO cats (name, parent_name, age, member_since, hometown, breed, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [name, parent_name, age, member_since, hometown, breed, image]
        );
    }
    
    try {
        const newCat = newCatData
        return newCat;
    } catch (err) {
        return err
    }
}

const deleteCat = async (id) => {
    try {
        const deletedCat = await db.one("DELETE FROM cats WHERE id=$1 RETURNING *", id);
        return deletedCat
    } catch (err) {
        return err
    }
}

const updateCat = async (cat, id) => {
    const {name, parent_name, age, member_since, hometown, breed, image} = cat;
    try {
        const updatedCat = await db.one("UPDATE cats SET name=$1, parent_name=$2, age=$3, member_since=$4, hometown=$5, breed=$6, image=$7 WHERE id=$8 RETURNING *", [name, parent_name, age, member_since, hometown, breed, image, id]);
        return updatedCat
    } catch (err) {
        return err
    }
}




module.exports = {
    getAllCats,
    getCat,
    createCat,
    deleteCat,
    updateCat
};
