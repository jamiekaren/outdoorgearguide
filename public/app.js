console.log("app.js file working! ");


// grab the articles as a JSON
$.get("/api/scraped", function (data) {

    let outdoorPosts = data;
    console.log(outdoorPosts);

    for (let i = 0; i < outdoorPosts.length; i++) {

        console.log(outdoorPosts[i]);

        makeCards(outdoorPosts[i]);

      

    };

});


function makeCards(data) {

    // let thisImage = $('<img src="');
    // thisImage.append(data.image);
    // thisImage.append('">');

    let thisTitle = $('<h5 class="card-title">' + '<a href="');
    thisTitle.append(data.link);
    thisTitle.append('">')
    thisTitle.append(data.title);
    thisTitle.append('</a>');
    thisTitle.append('</h5>');

    let newCard = $('<div class="card" style="width: 18rem;">');
    // newCard.append(thisImage);
    newCard.append('<div class="card-body">');
    newCard.append(thisTitle);
    newCard.append('<a href="" class="btn btn-primary">'
        + "Save Post" + '</a>' + '</div>' + '</div>');

    $("#posts-div").append(newCard);

};







