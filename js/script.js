// Array of quotes and their attributes
const quotes = [
  {
    quote: "Nothing will work unless you do",
    source: "Maya Angelou",
    year:"2011",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
    source: "Will Rogers",
    year:"2006",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "Whether You Think You Can Or Think You Cant, You’re Right",
    source: "Henry Ford",
    year:"2008",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Stephen King",
    year:"2005",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    year:"2015",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Stephen King",

    year:"2019",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    source: "John Lennon",
    year:"2017",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    source: "Albert Einstein",
    year:"2010",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  }
];
// List of the possible background colours
const colours =  ["#323232", "#9c2c00", "#946300", "#930045", "#00947b"," #00942c" ,"#2b2b2b"," #0335fc"]

/***
 * `getRandomQuote` function
***/
// Gets a random number between 0 and the number of quotes in quotes array
function getRandomQuote() {

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return randomQuote;

}

/***
 * `printQuote` function
***/
// Outputs quote with given attributes to the page
function printQuote() {
  let newQuote = getRandomQuote();
  let HTML = '<p class="quote">' + newQuote.quote + '</p>'  
  HTML += '<p class="source">' + newQuote.source;
  if (newQuote.citation) {
    HTML += '<span class="citation">' + newQuote.citation + '</span>';
  }
  if (newQuote.year) {
    HTML += '<span class="year">' + newQuote.year + '</span>';
  }
  if (newQuote.tags) {
    HTML += '<span class="year">' + newQuote.tags + '</span>';
  }
  HTML += '</p>';
  document.getElementById('quote-box').innerHTML = HTML; 
  return HTML;
}

/***
 * `random background color` function
***/
// Sets new background color everytime random quote appears
function newColor() {
  // Gets a random number between 0 and length of background colours
  let bg_number =  Math.floor(Math.random() * colours.length);
  // Uses random number to choose background colour from array
  let bg_colour = colours[bg_number];
  let x = document.getElementById("particles-js");
  x.style.backgroundColor = `${bg_colour}`;
}



  setInterval(function() { 
    printQuote();
    newColor();
  }, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", newColor, false);
