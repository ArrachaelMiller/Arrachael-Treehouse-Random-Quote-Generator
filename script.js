/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//Array of quotes
var quotes = [
    {
      quote: "Never be limited by other people's limited imaginations",
      source: "-Dr. Mae Jemison, first American female Astronaut",
    },
    {
      quote: "You miss 100% of the shots you don't take",
      source: Wayne Gretzky
      tags: ["Just Do It", "Sports"]
    },
    {
      quote: "I refuse to accept the view that mankind is so tragically bound to the starless midnight of racism and war that the bright daybreak of peace and brotherhood can never become a reality... I believe that unarmed truth and unconditional love will have the final word",
      source: "-Martin Luther King, Jr.",
    },
    {
      quote: "The only thing we have to fear is fear itself",
      source: "Franklin D. Roosevelt",
      citation: "First Inaugural Address",
      tags: ["Hope", "Politics"]
    }
    {
      quote: "In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute",
      source: "-Thurgood Marshall, first African American U.S. Supreme Court member",
    },
    {
      quote: "Hate is too great a burden to bear. It injuries the hater more than it injures the hated",
      source: "-Coretta Scott King",
    },
    {
      quote: "Our deepest fear is not we are inadequate, Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness That most frightens us.",
      source: "-Marianne Williamson",
      citation: "Akeelah and the Bee (movie)",
      year: 2006
    }
   ];
  
  
  //Generate a random number, use number to return random quote from array
  function getRandomQuote() {
   var randomQuote = Math.floor(Math.random() * quotes.length); //Selects random quote
   return quotes[randomQuote]; //Returns random quote
  };
  
  //Calls getRandomQuote function
  function printQuote() {
   var showQuote = getRandomQuote();
   var html = "<p class='quote'>" + showQuote.quote + "</p>";
   html += "<p class='source'>" + showQuote.source + "</p>";
  
  //Prints optional properities in quote array
   if ("citation" in showQuote) {
     html += "<span class='citation'>" + showQuote.citation + "</span>";
   }
  
   if ("year" in showQuote) {
     html += "<span class='year'>" + showQuote.year + "</span>";
   }
  
  //Sets innerHTML of 'quote-box' div to the HTML string
   document.getElementById("quote-box").innerHTML = html;
  }
  
  //Runs printQuote function to print quotes to the page
  printQuote();
  
  
  //When the button is clicked, the event listener will call printQuote function
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
   
   //Generate a random number, use number to return random quote from array
   function getRandomQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length); //Selects random quote
    return quotes[randomQuote]; //Returns random quote
   };
   
   //Calls getRandomQuote function
   function printQuote() {
    var showQuote = getRandomQuote();
    var html = "<p class='quote'>" + showQuote.quote + "</p>";
    html += "<p class='source'>" + showQuote.source + "</p>";
   
   //Prints optional properities in quote array
    if ("citation" in showQuote) {
      html += "<span class='citation'>" + showQuote.citation + "</span>";
    }
   
    if ("year" in showQuote) {
      html += "<span class='year'>" + showQuote.year + "</span>";
    }
    if ("tags" in showQuote) {
      html += "<span class='tags'>" + showQuote.tags + "</span>";
    }
   
   //Sets innerHTML of 'quote-box' div to the HTML string
    document.getElementById("quote-box").innerHTML = html;
   }
   
   //Runs printQuote function to print quotes to the page
   printQuote();
   
   
   //When the button is clicked, the event listener will call printQuote function
   document.getElementById('loadQuote').addEventListener("click", printQuote, false);