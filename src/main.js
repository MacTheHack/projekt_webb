import $ from 'jquery';
const API_URL = "https://api.funtranslations.com/translate/pirate.json?text=";

var quotes = [];
function requestToAPI(text) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", API_URL + text, false );
    xmlHttp.setRequestHeader("X-Funtranslations-Api-Secret", "1IKXHDGkGHDGTTw6utk3dgeF");
    xmlHttp.send( null );
    var json = JSON.parse(xmlHttp.responseText);

    return json.contents.translated;
}

function saveQuote(){
    var text = $("#translation").text();
    if(text.length>0){
        if(localStorage.getItem('quotes') != null) quotes =  JSON.parse(localStorage.getItem('quotes'));
        var text = { text: text};
        quotes.push(text);
        localStorage.setItem("quotes", JSON.stringify(quotes));
        alert("Quote has been saved!");
    }
}

$(document).ready(function() {
    $("#convert").on("click", function(event) {
        event.preventDefault();
        var input = $("#inputText").val();
        if (input.length >= 1){
          var translation = requestToAPI(input);
          $("#translation").removeClass("d-none").text(translation);
          $("#inputText").val("");
        } else{
          alert("No input given..")
        }
    });
    $('#saveQuote').click(saveQuote);
});
