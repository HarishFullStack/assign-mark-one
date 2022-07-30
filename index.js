var readlineSync = require("readline-sync");

var score = 0;

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW HARISH?");
}

var highScores = [
  {
    name: "Amar",
    score: 4,
  },

  {
    name: "Ajit",
    score: 3,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "Mumbai"
}, {
  question: "My favorite place to visit? ",
  answer: "Goa"
},
{
  question: "Where do I work? ",
  answer: "Innovisk"
},
{
  question: "Have I ever visited Ladakh? ",
  answer: "yes"
},
{
  question: "Have I done 12th? ",
  answer: "no"
}];

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}



function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();