/******************************************
Treehouse FSJS Techdegree:
Hanh Le - project 1 - A Random Quote Generator
******************************************/


// An array of quote objects with five quote objects.
var quotes = [{
  quote: "Be nice to nerds. Chances are you'll end up working for one." , //quote object.
  source: 'Bill Gates', // source object.
  citation: 'EverdayPowerBlog.com', // citation object.
  year: '2010' // year object.
},

{
  quote: 'Politics determine who has the power, not who has the truth.',
  source: 'Paul Krugman',
  citation: 'The Australian Financial Review',
  year: 'September 6, 2010',
},

{ 
  quote: 'I always believe that ultimately, if people are paying attention, then we get good government and good leadership. And when we get lazy, as a democracy and civically start taking shortcuts, then it results in bad government and politics.',
  source: 'Barrack Obama',
  citation: 'interview by MSNBC',
  year: 'September 25, 2006'
},

{
  quote: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
  source: 'Albert Scheweitzer',
  citation: 'AudienceBloom',
  year: '2014'
},

{
  quote: 'Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down.',
  source: 'Charles F. Kettering',
  citation: 'AudienceBloom',
  year: '2014'
},
];

// 'getRandomQuote function to select random quote object.
function getRandomQuote(array) {
var quoteIndex = Math.floor(Math.random() * (quotes.length));
//for (var i = 0; i < array.length; i++) {
var randomQuote = array[quoteIndex];
//}
console.log('returning random quote', randomQuote, quoteIndex)
return randomQuote;
}

// array of color for the background and button
var colors = [
  {
      background: "#ff2e63", //pink
      button: "#252a34"
  },
  {
      background: "#00adb5", //teal
      button: "#393e46"
  },
  {
      background: "#f38181", //salmon
      button: "#625772"
  },
  {
      background: "#6639a6", //purple
      button: "#521262"
  },
  {
      background: "#3f72af", //blue
      button: "#112d4e"
  },
  {
      background: "#f95959", //orange
      button: "#455d7a"
  },
  {
      background: "#a3de83", //lt green
      button: "#2eb872"
  },
  {
      background: "#118df0", //bright blue
      button: "#0e2f56"
  },
  {
      background: "#ff5722", //bright orange
      button: "#393e46"
  },
  {
      background: "#3fc1c9", //aqua
      button: "#fc5185"
  }
];

// Generate different color.
function getRandomColor() {
  var randomColor = Math.floor(Math.random() * colors.length);

  return colors[randomColor];
}

// printQuote function to print the quote according to order.
function printQuote() {
  console.log("clicked");
  var message = '';
  var color = getRandomColor();
  var result = getRandomQuote(quotes); // print radom quote by calling function getRandomQuote
  message = "<p class = 'quote'>" + result.quote + "</p>";
  message += "<p class = 'source'>" + result.source;
  message += "<span class = 'citation'>" + result.citation + "</span>";
  message += "<span class = 'year'>" + result.year;
  message += "</p>";

document.getElementById('quote-box').innerHTML = message;
document.body.style.background = color.background;
document.getElementById("loadQuote").style.background = currentColor.button;
}

// automatic timer for different quote to change
window.timer = setInterval(printQuote, 6000);

// Change to different quote with the click. 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);