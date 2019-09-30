const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


//scraping tools
//axios is promised-bsed library
const axios = require("axios");
const cheerio = require("cheerio");

//require all models
const db = require("./models");

const PORT = 3000;

//start up express
const app = express();

//use morgan for logging requests
app.use(logger('dev'));
//parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//make static public folder
app.use(express.static("public"));

//connect to Mongo DB
mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

//Routes
require("./routes/api-routes")(app);
require("./routes/html-routes.js")(app);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });