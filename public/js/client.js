// WHEN USER CLICKS ON THE SCRAPE BUTTON
$("#scrape").on('click', () => {
    console.log('Scraping...');

    // SEND AN AJAX POST CALL TO THE SERVER
    $.post( "/", function(data) {
        console.log("WAPO Scraped");

        // RELOAD THE PAGE BC THE SERVER ISN'T DOING IT, FOR WHATEVER REASON...
        location.reload();
      });

})

// when user clicks save
    // send ajax post call to server with id of the item
    // .then location.reload