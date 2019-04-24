
//Make an Array of African American quotes
var quotes = [
  {
    quote: "Never be limited by other people's limited imaginations",
    source: "-Dr. Mae Jemison, first American female Astronaut",
  },
  {
    quote: "I refuse to accept the view that mankind is so tragically bound to the starless midnight of racism and war that the bright daybreak of peace and brotherhood can never become a reality... I believe that unarmed truth and unconditional love will have the final word",
    source: "-Martin Luther King, Jr.",
  },
  {
    quote: "In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute",
    source: "-Thurgood Marshall, first African American U.S. Supreme Court member",
  },
  {
    quote: "Hate is too great a burden to bear. It injuries the hater more than it injures the hated",
    source: "-Coretta Scott King",
  },

  {
    quote: "The cost of liberty is less than the price of repression",
    source: "—W.E.B. Du Bois"
  },
  {
    quote: "Defining myself, as opposed to being defined by others, is one of the most difficult challenges I face",
    source: "-Carol Moseley-Braun, politician and lawyer"
  },
  {
    quote: "One day our descendants will think it incredible that we paid so much attention to things like the amount of melanin in our skin or the shape of our eyes or our gender instead of the unique identities of each of us as complex human beings",
    source: "-Franklin Thomas, activist, philanthropist, and former president of the Ford Foundation",
  },

  {
    quote: "Our deepest fear is not we are inadequate, Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness That most frightens us.",
    source: "-Marianne Williamson",
    citation: "Akeelah and the Bee (movie)",
    year: 2006
  }
 ];


//Produce a random number, use this random number to print out to screen random quote from array
function getRandomQuote() {
 var randomQuote = Math.floor(Math.random() * quotes.length); //Selects random quote
 return quotes[randomQuote]; //Returns random quote
};

//Calls getRandomQuote function
function printQuote() {
 var showQuote = getRandomQuote();
 var html = "<p class='quote'>" + showQuote.quote + "</p>";
 html += "<p class='source'>" + showQuote.source + "</p>";

//Prints optional properities in quote array like citation or year
 if ("citation" in showQuote) {
   html += "<span class='citation'>" + showQuote.citation + "</span>";
 }

 if ("year" in showQuote) {
   html += "<span class='year'>" + showQuote.year + "</span>";
 }

//Sets innerHTML of  the DIV 'quote-box'  to the HTML string
 document.getElementById("quote-box").innerHTML = html;
}

//Runs printQuote function to print quotes to the page
printQuote();


//When the button is clicked, the event listener will call printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
 
 