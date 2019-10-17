console.log("saved.js file working! ");


$.get("/api/saved-posts", (data) =>{

    let savedPosts = data;
    console.log(savedPosts);



});



