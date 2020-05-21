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

function convert(event) {
    event.preventDefault();
    var input = $("#inputText").val();
    if (input.length >= 1){
        var translation = requestToAPI(input);
        $("#translation").removeClass("d-none").text(translation);
    } else{
        alert("No input given..")
    }
}

function displayQuotes(){
    var jsonQuotes = localStorage.getItem("quotes");
    quotes = JSON.parse(jsonQuotes);
<<<<<<< HEAD
    console.log(quotes);
     for(var i=0; i<quotes.length; i++){
        var listitem = $("<li></li>").text(quotes[i]);
        $("#list").append(listitem);
       console.log(quotes[i]);
=======
    console.log(quotes.length);
    console.log(jsonQuotes);
    for(var i=0; i<quotes.length; i++){
        var listitem = $("<li></li>").text(quotes[i].text);
        $("#quoteList").append(listitem);
        console.log(quotes[i]);
>>>>>>> f4965de9c6cc1a6309f57ae8114b3d4f5c36fc28
    }
}

function saveQuote(){
<<<<<<< HEAD
  var text = { text: $("#translation").text()};
  quotes.push(text);
  localStorage.setItem("quotes", JSON.stringify(quotes));
=======
    var text = $("#translation").text();
    var item = { text: text};
    quotes.push(item);
    localStorage.setItem("quotes", JSON.stringify(quotes));
>>>>>>> f4965de9c6cc1a6309f57ae8114b3d4f5c36fc28
}

$(document).ready(function() {
    $("#convert").on("click", convert);
    $('#saveQuote').click(saveQuote);
    $('#displayQuotes').click(displayQuotes);
});
