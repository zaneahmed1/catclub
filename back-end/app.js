// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// CONTROLLER
const catController = require("./controllers/catController")

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/cats", catController);

app.get("/", (req, res) => {
    res.send("Cat Club")
})

// EXPORT
module.exports = app;
