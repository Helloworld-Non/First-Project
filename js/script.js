//quotes for array

var quotes = [{
  quote : "Hi,my name is Non and I'm from Thailand",
  source : "Facebook ",
  citation : "Non Karakarn",
  year : "1996"
},
{
  quote : "Don't cry because it's over, smile because it happened",
  source : "Twitter"
},{
  quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  source : "Facebook",
  citation : "Oscar Wilde"
},{
  quote : "Be yourself; everyone else is already taken",
  source : "Facebook"
},{
  quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  source : "IG",
  year : "2019"
}]

//test//
console.log(quotes);



//get result from array (5 item)

function getRandomQuote(){
  var arrayNumber = Math.floor(Math.random()*5)
  var resultQuote = quotes[arrayNumber]
  return resultQuote

};

var test12 = getRandomQuote()
console.log(test12);



function printQuote (){
  var html = "" ;
  var randomQuote = getRandomQuote();
  html += "<p class= 'quote'>" + randomQuote.quote + "</p>";
  html += "<p class='source'>"+ randomQuote.source  ;
  if(randomQuote.citation){
    html += "<span class='citation'>"+ randomQuote.citation + "</span>" ;
  }
  if(randomQuote.year){
    html += "<span class='year'>"+ randomQuote.year +"</span>" ;
  }
  html += "</p>" ;
  document.getElementById('quote-box').innerHTML = html;
}

printQuote();

document.getElementById("loadQuote").addEventListener("click", printQuote, false);



