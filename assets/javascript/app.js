// ***** Global variables and Objects

var roundTimer;
var roundCount;

var reviewTimer;

// Thinking of doing an object for each question, inside of an object simply named triviaObjects
var triviaObjects = [
    {
        "question" : "Who was the Headmaster of Hogwarts when the Chamber of Secrets was first opened?",
        "choices" : ["Professor Dippet", "Professor Dumbledore", "Professor Nicholas Flamel", "Professor McGonagall"],
        "answer" : "Professor Dippet",
        "giff" : "https://media.giphy.com/media/1CtJUjxxgA5Pi/giphy.gif"
    },

    {
        "question" : "What is the address of the ancestral home of Family Black?",
        "choices" : ["No. 12 Privet Dr", "12 Grimmauld Place", "42 W Godrics Hollow", "112 Diagon Alley"],
        "answer" : "12 Grimmauld Place",
        "giff" : "https://media.giphy.com/media/o5aQrrob1S2Lm/giphy.gif"
    },

    {
        "question" : "What name does Hagrid give a dragon hatchling?",
        "choices" : ["Fang", "Aragog", "Norbert", "BuckBeak"],
        "answer" : "Norbert",
        "giff" : "https://media.giphy.com/media/n1JVh5WLl9LBC/giphy.gif"
    },

    {
        "question" : "What is the spell for opening a lock?",
        "choices" : ["Reducto", "Alohamora", "Accio", "Aparecium"],
        "answer" : "Alohamora",
        "giff" : "https://media.giphy.com/media/gT8F4peUvNYUo/giphy.gif"
    },

    {
        "question" : "What position does Krum play on the Bulgarian Quiddich Team?",
        "choices" : ["Seeker", "Beater", "Chaser", "Keeper"],
        "answer" : "Seeker",
        "giff" : "https://media.giphy.com/media/NTMzggotBZdkI/giphy.gif"
    }

];

    

var roundIsActive = false;

var correct;
var incorrect;
var incomplete;



// ***** Functions

    // newGame

    // setUpRound

    // roundScore

// ***** Main code


// We Need the Game Setup
    // This should include a splash screen and a start/play button

    // Then load the game card

    // Then setupRound with question details like: Question, button text, giff.
// **** roundIsActive=TRUE
        // start 30 second timer

        // If user clicks on a button
            // --> set roundIsActive=FALSE
            // End roundTimer

        //If roundTimer reaches zero
            // set roundIsActive to FALSE
            // End roundTimer

// **** roundIsActive=FALSE
            // Start reviewTimer
            // Evaluate roundScore
            // Display correct answer

// **** reviewTimer==0
        // setupRound