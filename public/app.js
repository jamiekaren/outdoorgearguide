console.log("app.js file working! ");

// grab the articles
$.get("/api/scraped", function (data) {

    let outdoorPosts = data;
    console.log(outdoorPosts);

    for (let i = 0; i < outdoorPosts.length; i++) {
        // console.log(outdoorPosts[i]);
        makeCards(outdoorPosts[i]);

    };
});


function makeCards(data) {

    // let thisImage = $('<img src="');
    // thisImage.append(data.image);
    // thisImage.append('">');

    let thisTitle = $('<a href="' + "https://www.outdoorgearlab.com"
        + data.link + 'id="card-link"' + '"/>');
    thisTitle.append('<h5 class="card-title" id="card-title">');
    thisTitle.append(data.title);
    thisTitle.append('</h5>');
    thisTitle.append('</a>');

    let newCard = $('<div class="card" style="width: 18rem;" + "data-id="' + data.id + ' >');
    // newCard.append(thisImage);
    newCard.append('<div class="card-body">');
    newCard.append(thisTitle);
    newCard.append('<a href="" class="btn btn-warning" id="save-post">' + "Save Post" + '</a>' + '</div>' + '</div>');

    $("#posts-div").append(newCard);

};

//When a user clicks on the save button for a post
$(document).on("click", "#save-post", () => {
    //We get the ID for that post
    const thisId = $(this).attr("data-id");

    $.ajax({
        method: "POST",
        url: "/saved/" + thisId,
        data: {
            title: $("#card-title").val(),
            link: $("#card-link")
        }
    })
        .then((data) => {
            console.log(data);

        });


});






