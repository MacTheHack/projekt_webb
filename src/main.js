import $ from 'jquery';
const API_URL = "https://api.funtranslations.com/translate/pirate.json?text=";

let quotes = [];
function requestToAPI(text) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", API_URL + text, false );
    xmlHttp.setRequestHeader("X-Funtranslations-Api-Secret", "1IKXHDGkGHDGTTw6utk3dgeF");
    xmlHttp.send( null );
    var json = JSON.parse(xmlHttp.responseText);

    return json.contents.translated;
}

function saveQuote(){
  var text =  $("#translation").text();
  quotes.push(text);
  localStorage.setItem("quotes", quotes);
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
    $('#saveQuote').click(saveQuote);
});
