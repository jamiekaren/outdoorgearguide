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

    let thisTitle = $('<a href="' + data.link + '"/>');
    thisTitle.append('<h5 class="card-title">');
    thisTitle.append(data.title);
    thisTitle.append('</h5>');
    thisTitle.append('</a>');

    let newCard = $('<div class="card" style="width: 18rem;">');
    // newCard.append(thisImage);
    newCard.append('<div class="card-body">');
    newCard.append(thisTitle);
    newCard.append('<a href="" class="btn btn-warning">'
        + "Save Post" + '</a>' + '</div>' + '</div>');

    $("#posts-div").append(newCard);

};







