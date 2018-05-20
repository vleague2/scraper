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

// WHEN THE USER CLICKS ON THE SAVE BUTTON
$(".save").click(function() {

    // GRAB ID OF BUTTON CLICKED
    let id = this.id;

    console.log(id);

    console.log("Saving article...");

    // SEND AJAX UPDATE CALL
    $.ajax({
        type: 'POST',

        // SEND IN ID OF BUTTON
        url: '/' + id,
        success: function(data) {
            console.log("Item saved!");
            location.reload();
        }
    })
})
   