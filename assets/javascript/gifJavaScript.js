// APIKey = dfbe6001dd834be88988073b51cc20ef;


$(document).ready(function() {

    var characters = ["Bart Simpson", "Deadpool", "Homer Simpson", "Doctor Who", "Philip J Fry", "Bender B Rodriguez", "Moe Szyslak", "Macho Man", "Dory", "Dug"];
    console.log(characters);

    function displayCharacters() {

        var person = $(this).attr("data-person");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&rating=pg&limit=7";

        console.log(queryURL);

        $.get(queryURL).done(function(response) {
            var results = response.data;
            console.log(this);
            $('.rating').html('Rated: ' + results.rating);
            $('.image').html('<img src="' + results.images.original.url + '">');

        });
    }

    function renderButtons() {
    	$('#buttons-view').empty();
    	for (var i = 0; i < characters.length; i++) {
    		var newButton = $("<button class='btn btn-primary btn-lg active'>");
    		newButton.attr("data-person", characters[i]);
    		newButton.text(characters[i]);
    		$("#buttons-view").append(newButton);
    	}
    }

    $("#add-character").on("click", function(event) {
    	event.preventDefault();
    	var char = $("#character-input").val().trim();
    	characters.push(char);
    	renderButtons();
    });


    $(document).on("click", ".btn-primary", displayCharacters);
  	renderButtons();  

  });


