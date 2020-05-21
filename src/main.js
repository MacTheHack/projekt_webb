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

function displayQuotes(){
    // var jsonQuotes = localStorage.getItem("quotes");
    // quotes = JSON.parse(jsonQuotes);
    // console.log(quotes);
    //  for(var i=0; i<quotes.length; i++){
    //    var listitem = $("<li></li>").text(quotes[i]);
    //     $("#list").append(listitem);
    //    console.log(quotes[i]);
    // }
     $("#quoteList").removeClass("d-none")

}

function saveQuote(){
  quotes =  JSON.parse(localStorage.getItem('quotes'));
  console.log(quotes);
  var text = { text: $("#translation").text()};
  quotes.push(text);

  console.log(quotes);

  localStorage.setItem("quotes", JSON.stringify(quotes));
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
    $('#displayQuotes').click(displayQuotes);
});
