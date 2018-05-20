$("#scrape").on('click', () => {
    console.log('yes');
    $.post( "/", function(data) {
        console.log("WAPO Scraped");
        location.reload();
      });

})

// when user clicks save
    // send ajax post call to server with id of the item
    // .then location.reload