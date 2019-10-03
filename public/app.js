console.log("app.js file working! ");


// grab the articles as a JSON
$.get("/api/scraped", function (data) {

    let outdoorPosts = data;
    console.log(data);

    // for (let i = 0; i < outdoorPosts.length; i++) {

    //     $("#posts-div").append("<p data-id='" + outdoorPosts[i]._id + "'" >
    //         + "<h2>" + outdoorPosts[i].title + "</h2>");
            
            
            
    //         // + "<br />" + outdoorPosts[i].link + <br />
    //         // + "<img src= " + "'" + outdoorPosts[i].image + "'" + ">");
    // }

});










