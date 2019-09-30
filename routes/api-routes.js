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

            // console.log(response);

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

                result.link = $(this)
                    .children("a")
                    .attr("href");

                result.image = $(this)
                    .children("a")
                    .children('div')
                    .children('img')
                    .attr("src");

                console.log(result);

                //     //now let's make a new post in our database
                //     db.Post.create(result).then(function (dbPost) {
                //         console.log(dbPost);
                //     })
                //         .catch((err) => {
                //             console.log(err);
                //         });
                //     res.send("Scrape Complete");
                // });


            });
        });


    });

};