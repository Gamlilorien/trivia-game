// ***** Global variables and Objects

// intervalId so we can end the roundTimer
var intervalId;
var intervalId2;
var timerRunning = false;

// roundTimer object
var roundTimer = {

    time: 20,

    reset: function() {
        roundTimer.time = 20;
        clearInterval(intervalId);
        // Reset HTML element
        $("#timer").text("00:20");
    },

    countDown: function() {
        // we need a way for the timer to stop if it reaches 0
        if (roundTimer.time == 0) {
            // roundTimer.stop;
            // then we want to trigger the next round
            roundScore();
            reviewTimer();

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

var reviewTimerRunning = false;

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
    },

];

// so we know when to trigger the end of the game.
var maxRounds = triviaObjects.length -1;
    

var roundIsActive = false;
var buttonId;
var answerId;

var correct;
var incorrect;
var incomplete;



// ***** Functions

// newGame
function newGame() {
    correct =0;
    incorrect =0;
    incomplete =0;

    round =0;

    // set HTML elements
    setUpRound(round);
    
    roundIsActive = true;
};

function reviewTimer() {
    // if (!reviewTimerRunning) {
        console.log("start review timer...")
        intervalId2 = setInterval(endReviewTimer, 3000);
        reviewTimerRunning = true;
    // }
};

function endReviewTimer() {
    clearInterval(intervalId2);
    reviewTimerRunning = false;
    // now call newRound function
    console.log("end review timer")
    // check to see if game is over
    if (round == maxRounds) {
        console.log("end of game")
        // End of game code goes here...
        // $(".question").empty();
        // $(".toBeCleared").empty();
        // // set new title
        // $(".question").html("<h3>Thanks for playing!</h3>");
        // $(".toBeCleared").html("<h4>Correct: </h4>");
        alert("Correct: " +correct + " Incorrect: " +incorrect + " Incomplete: " +incomplete)


    } else {
    newRound();
    roundIsActive = true;
    };
};

// setUpRound
function setUpRound(round) {
    $("#question").text(triviaObjects[round].question);
    $("#0").text(triviaObjects[round].choices[0]);
    $("#1").text(triviaObjects[round].choices[1]);
    $("#2").text(triviaObjects[round].choices[2]);
    $("#3").text(triviaObjects[round].choices[3]);

    // clear styling
    $(".answerButtons").removeClass("strikeThrough");
    // replace other image url with this one.
    // CAN'T GET THIS WORKING!!!
    // var newImg = $("<img>")
    // console.log(newImg);
    //       newImg.attr("src", triviaObjects[round].giff);
    //       console.log(triviaObjects[round].giff)
    //       console.log(newImg);
    // $("#myImg").appendTo("<p>testing?</p>")
    // $("#myImg").html = winImage(triviaObjects[round].giff);
    var newImg = triviaObjects[round].giff;
    // ?????
    $("#myImg").attr("src", newImg).addClass("myImg");    

};

// need a function for new rounds beyond the first
// needs a delay so players can see the results
function newRound() {
    round++;
    setUpRound(round);
    roundTimer.reset();
    roundTimer.start();
};

// roundScore - triggered from clicking the answerButtons
// purpose: to end the current round, determine the score
function roundScore(buttonId) {
    
    // only trigger if roundIsActive... you need TWO equal signs...
    if (roundIsActive == true) {
        // stop roundTimer - this will also end the ROUND so they can't score multiple times
        roundTimer.stop();

        var correctAnswer = triviaObjects[round].answer;
        $(triviaObjects[round].choices).each(function(i) {
            if (correctAnswer === triviaObjects[round].choices[i]) {
                answerId = i;
            };
        });

        var theirAnswer = triviaObjects[round].choices[buttonId];

        // If answer is correct, tally as 'correct'
        if (theirAnswer === correctAnswer) {
            correct++;
            $("#myImg").attr("src", "assets/images/correct.jpg").addClass("myImg");

        // else if no button is pressed (ie timer runs out), tally as 'incomplete'
        } else if (buttonId === undefined) {
            incomplete++;
            $("#myImg").attr("src", "assets/images/timesUp.jpg").addClass("myImg");

        // otherwise tally as 'incorrect'
        } else {
            incorrect++;
            $("#myImg").attr("src", "assets/images/incorrect.jpg").addClass("myImg");

        };

        console.log("Correct:" + correct +", Incorrect: " +incorrect +", Incomplete: " +incomplete);

        // strike through all buttons then remove correct answer by id
        $(".answerButtons").addClass("strikeThrough");
        var correctButton = "#" +answerId;
        $(correctButton).removeClass("strikeThrough")
    }
    

};


// ***** Main code


// We Need the Game Setup
    // This should include a splash screen and a start/play button
    // On window load
    window.onload = function() {
        newGame();

        // on click events
        $(".answerButtons").click(function(){
            if (roundIsActive == true) {
                buttonId = this.id;
                roundScore(buttonId);
                
                // new round
                reviewTimer();
            }
            
        });
        
        // start roundTimer
        // we need () after the start or it won't run automatically!
        roundTimer.start();
    }

    // Then load the game card

