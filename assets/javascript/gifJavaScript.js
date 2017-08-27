$(document).ready(function() {

    var characters = ["Bart Simpson", "Deadpool", "Dr Nick", "Doctor Who", "Philip J Fry", "Bender B Rodriguez", "Moe Szyslak", "Macho Man", "Dory", "Dug"];
    console.log(characters);


    function renderButtons() {
        $('#buttons-view').empty();

        for (var i = 0; i < characters.length; i++) {

            var newButton = $("<button class='btn btn-primary btn-lg active'>");
            newButton.attr("data-person", characters[i]);
            newButton.text(characters[i]);

            $("#buttons-view").append(newButton);
        }
    }
    renderButtons();

    // pushes array items to DOM
    $("#add-character").on("click", function(event) {
        event.preventDefault();
        var char = $("#character-input").val().trim();
        characters.push(char);
        renderButtons();
    });





    // changed "doucment" listener to more specific #buttons-view
    $("#buttons-view").on("click", ".btn-primary", function() {

        var person = $(this).attr("data-person");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=15";
        console.log(queryURL);

        $.get(queryURL).done(function(response) {
            var results = response.data;
            console.log(results);

            var stillImage = results[0].images.original_still.url
            var gifImage = results[0].images.original.url

            $('.rating').html('Rated: ' + results[0].rating);

            $('.image').html('<img class="img-thumbnail" src="' + stillImage + ' "data-state="still"' + '>');
        });

        $(".img-thumbnail").on("click", function() {
            // var state = $(this).attr('data-state');
            // console.log(state);
            if (state === still) {
                $(this).html('<img class="img-thumbnail" src"' + gifImage + '>');
            }
        });
    });


});