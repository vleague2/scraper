// WHEN USER CLICKS ON THE SCRAPE BUTTON
$("#scrape").on('click', () => {
    console.log('Scraping...');

    // SEND AN AJAX POST CALL TO THE SERVER

    $.ajax({
        type: 'POST',
        url: "/"
    }).done(function (data) {
        console.log("WAPO Scraped");  
        // RELOAD THE PAGE   
        location.reload();
    })
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
   
// WHEN USER WANTS TO ADD A NOTE
$(".add-note").on('click', function() {
    let id = this.id;

    $.ajax({
        type: 'GET',
        url: "/note/" + id})
    .done(function (data) {
        console.log(data);
        $("#modal").modal('show');
        $(".save-note").attr('id', data._id);
        // run a loop through the notes
        // append a card to the modal for each note

        let card = '<div class="card mb-4">';
        let cardBody = '<div class="card-body">';


        $("#notes-holder").append(card + cardBody + '</div></div>')
    })
})

// WHEN THE USER SAVES THE NOTE THEY MADE
$(".save-note").on('click', function() {
    let id = this.id;

    console.log($("#add-note").val())

    $.ajax({
        type: 'POST',
        url: "/note/" + id,
        data: {
            body: $("#add-note").val()
        }
    })
    .done(function (data) {
        location.reload();
    })
})

// WHEN THE USER DELETES THE ARTICLE THEY SAVED
$(".remove").on('click', function() {
    let id = this.id;

    $.ajax({
        type: 'POST',
        url: "/delete/" + id,
    })
    .done(function (data) {
        location.reload();
    })
})