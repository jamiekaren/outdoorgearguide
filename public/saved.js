console.log("saved.js file working! ");


$.get("/api/saved", (data) =>{

    let savedPosts = data;
    console.log(savedPosts);



});



