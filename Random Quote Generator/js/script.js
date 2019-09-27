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
      background: "#ff2e63", // color: dark pink
      button: "#393e46" //color: cloud burst
  },
  {
    background: "#cd5c5c", //color: Indian Red
    button: "#455d7a" //color: Dingley
 },
  {
    background: "#ff0000", //color: Red
    button: "#354a42" //color: Te Papa Green
  },
  {
      background: "#00adb5", //color: Teal
      button: "#252a34" //color: Midnight Express
  },
  {
    background: "#f95959", //color: Orange
    button: "#c6b6e0" //color: Lilac Bush
  },
  {
      background: "#f38181", //color: Salmon
      button: "#6bblbf" //color: Colblindor
  },
  {
      background: "#6639a6", //color: Purple
      button: "#521262" //color: Shuttle Grey
  },
  {
      background: "#3f72af", //color: Blue
      button: "#112d4e" //color: Blue Whale
  },
  {
      background: "#a3de83", //color: Light Green
      button: "#2eb872" //color: Meteor
  },
  {
      background: "#118df0", //color: Bright Blue
      button: "#0e2f56" //color: Prussian Blue
  },
  {
    background: "#f08080", //color: Light Coral
    button: "#e9967a" //color: Dark Salmon
  },
  {
      background: "#ff5722", //color: Bright Orange
      button: "ae637c" //color: Hue
  },
  {
      background: "#3fc1c9", //color: Aqua
      button: "#fc5185" //color: French Rose
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