import $ from 'jquery';
const API_URL = "https://api.funtranslations.com/translate/pirate.json?text=";


function requestToAPI(text) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", API_URL + text, false );
    xmlHttp.send( null );
    var json = JSON.parse(xmlHttp.responseText);

    return json.contents.translated;
}

$(document).ready(function() {
    $("#convert").on("click", function(event) {
        event.preventDefault();
        var input = $("#inputText").val();
        if (input.length >= 1){
          var translation = requestToAPI(input);
          $("#translation").removeClass("d-none").text(translation);
        } else{
          alert("No input given..")
        }

    });
});
