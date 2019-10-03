const db = require("../models");

//scraping tools
//axios is promised-bsed library
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function (app) {

    //route to scrape our website for adata
    app.get("/scrape", function (req, res) {

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

            res.send("Scrape Complete");
        });
    });
};