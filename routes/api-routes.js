const db = require("../models");

//scraping tools
//axios is promised-bsed library
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function (app) {

    //route to scrape our website for adata
    app.get("/scrape", (req, res) => {

        //we use axios to grab the body of the html
        axios.get("https://www.outdoorgearlab.com/camping-and-hiking").then((response) => {

            //then we load that into cherio to create a shorthand selector
            var $ = cheerio.load(response.data);

            //then we gotta grab the right areas of our website
            $("article.inline").each(function (i, element) {

                // save to an empty result object
                var result = {};

                result.title = $(this)
                    .children("a")
                    .children('div')
                    .children('img')
                    .attr("alt");

                result.image = $(this)
                    .children("a")
                    .children('div')
                    .children('img')
                    .attr("src");

                result.link = $(this)
                    .children("a")
                    .attr("href");

                console.log(result);

                db.Post.create(result)
                    .then(function (dbPost) {
                        // View the added result in the console
                        console.log(dbPost);
                    })
                    .catch(function (err) {
                        // If an error occurred, log it
                        console.log(err);
                    });
            });


            console.log("--------------- Scrape Complete ---------------");
        });
    });


    // route for getting all the posts saved in the db
    app.get("/api/scraped", function (req, res) {
        //grab all the posts in our Post collection
        db.Post.find({})
            .then(function (dbPost) {
                // if we are sucessful, sned them back to the client
                res.send(dbPost);
            })
            .catch(function (err) {
                console.log(err);
            });
    });


    // Route to get articles by ID when a user saves them
    app.get("/api/save/:id", (req, res) => {

        db.Post.findByIdAndUpdate({
            _id: req.params.id,
            saved: true
        })
            .then((dbPost) => {
                res.json(dbPost)
            })
            .catch((err) => {
                res.json(err);
            });


    });

    app.get("/api/saved-posts", (req, res) => {

        db.Post.find({ "saved": true })
            .then((savedPost) => {
                res.json(savedPost);

            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.get("/api/clear/", (req, res) => {

        db.Post.remove({})
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                res.json(err);
            });

    });


};
