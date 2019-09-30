const db = require("../models");

module.exports = function (app) {

    //route to scrape our website for adata
    app.get("/scrape", (req,res) =>{
        
        //we use axios to grab the body of the html
        axios.get("https://www.outdoorgearlab.com/camping-and-hiking").then((response) =>{

        //then we load that into cherio to create a shorthand selector
        var $ = cheerio.load(response.data);

        //then we gotta grab the right areas

        });
    });









};