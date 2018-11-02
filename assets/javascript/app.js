// ***** Global variables and Objects

// intervalId so we can end the roundTimer
var intervalId;
var timerRunning = false;

// roundTimer object
var roundTimer = {

    time: 10,

    reset: function() {
        roundTimer.time = 30;
        clearInterval(intervalId);
        // Reset HTML element
        $("#timer").text("00:00");
    },

    countDown: function() {
        // we need a way for the timer to stop if it reaches 0
        if (roundTimer.time == 0) {
            roundTimer.stop;
            // then we want to trigger the next round

            // otherwise keep counding down
        } else {      
            roundTimer.time--;
            console.log(roundTimer.time);
            // convert this two digit number in a timer display (ie 00:00)
            var dr = roundTimer.timeConverter(roundTimer.time);
            // display this converted time
            $("#timer").html(dr);
            // set red here, otherwise has a delay
            if (roundTimer.time == 0) {
                $("#timer").addClass("timesUp");
            }
        }
    },

    start: function() {
        if (!timerRunning) {
            intervalId = setInterval(roundTimer.countDown, 1000);
            timerRunning = true;
        }
    },

    stop: function () {
        clearInterval(intervalId);
        timerRunning = false;
        roundIsActive= false;
    },

    timeConverter: function(t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
    
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
      }

// End roundTimer object
};











var round;

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
function newGame() {
    correct =0;
    incorrect =0;
    incomplete =0;

    round =1;

    // set HTML elements
    setUpRound(round);
    
    roundIsActive = true;
};

// setUpRound
function setUpRound(round) {
    $("#question").text(triviaObjects[round].question);
    $("#answerA").text(triviaObjects[round].choices[0]);
    $("#answerB").text(triviaObjects[round].choices[1]);
    $("#answerC").text(triviaObjects[round].choices[2]);
    $("#answerD").text(triviaObjects[round].choices[3]);
    // replace other image url with this one.
    // CAN'T GET THIS WORKING!!!
    var newImg = $("<img>")
    console.log(newImg);
          newImg.attr("src", triviaObjects[round].giff);
          console.log(triviaObjects[round].giff)
          console.log(newImg);
    $("#myImg").text("testing?")
};

// roundScore
function roundScore() {

};


// ***** Main code


// We Need the Game Setup
    // This should include a splash screen and a start/play button
    window.onload = function() {
        newGame();

        // on click events
        $("#answerA").click(function(){
            console.log("answerA");
        });
        $("#answerB").click(function(){
            console.log("answerB");
        });
        $("#answerC").click(function(){
            console.log("answerC");
        });
        $("#answerD").click(function(){
            console.log("answerD");
        });
        
        // start roundTimer
        // we need () after the start or it won't run automatically!
        roundTimer.start();
    }

    // Then load the game card

    // Then setupRound with question details like: Question, button text, giff.
// **** roundIsActive=TRUE
        // start 30 second timer

        // If user clicks on a button
            // --> set roundIsActive=FALSE

        //If roundTimer reaches zero
            // set roundIsActive to FALSE

// **** roundIsActive=FALSE
            // End roundTimer
            // Start reviewTimer
            // Evaluate roundScore
            // Display correct answer

// **** reviewTimer==0
        // setupRound