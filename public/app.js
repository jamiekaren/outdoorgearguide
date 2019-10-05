console.log("app.js file working! ");


// grab the articles as a JSON
$.get("/api/scraped", function (data) {

    let outdoorPosts = data;
    console.log(outdoorPosts);

    for (let i = 0; i < outdoorPosts.length; i++) {
        let newDiv = $("<div>");
        newDiv.append(data.title);

        $("#posts-div").append(newDiv);

    };

});


function makeCards(data) {
    console.log(data);



};







