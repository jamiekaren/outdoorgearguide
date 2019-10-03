console.log("app.js file working! ");


// grab the articles as a JSON
$.get("/dbPosts", function (data) {

    for (let i = 0; i < data.length; i++) {

        $("#posts-div").append("<p data-id='" + data[i]._id + "'" >
            + data[i].title + "<br />" + data[i].link + <br />
            + "<img src= " + "'" + data[i].image + "'" + ">");
    }

});










