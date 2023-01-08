const express = require("express");
const cats = express.Router();

const {
    getAllCats,
    getCat,
    createCat,
    deleteCat,
    updateCat
} = require("../queries/cats");


//every express route accepts a string as a route paramater(where we are listening) and an async function (what to do)
//cats.get method creates a listener at the string that executes the callback 
cats.get("/", async (req,res) => {
    const allCats = await getAllCats();
    if(allCats[0]){
        res.status(200).json(allCats)
    } else {
        res.status(500).json({ error: "server error" })
    }
})

cats.get("/:id", async (req, res) => {
    const { id } = req.params;
    const cat = await getCat(id);
    if(cat.id){
        res.status(200).json(cat);
    } else {
        res.status(404).json({ error: "not found" })
    }
})


cats.post("/", async (req, res) => {
    try {
      const cat = await createCat(req.body);
      res.json(cat)
    } catch (error) {
      return error;
    }
  });


cats.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const deletedCat = await deleteCat(id);
    if(deletedCat.id){
        res.status(200).json(deletedCat)
    } else {
        res.status(404).json("Cat not found")
    }
})

cats.put("/:id", async (req,res) => {
    const { id } = req.params;
    const updatedCat = await updateCat(req.body, id);
    if(updatedCat.id) {
        res.status(200).json(updatedCat)
    } else {
        res.status(422).json({ error: "Cat not updated"})
    }
})


module.exports = cats;