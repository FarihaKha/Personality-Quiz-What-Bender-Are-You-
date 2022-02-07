var waterbenderScore = 0; // Store the waterbender score
var earthbenderScore = 0; // Store the earthbender score
var firebenderScore = 0; // Store the firebender score
var airbenderScore = 0; // Store the airbender score

var questionCount = 0; // Store the number of answers clicked on

// Store HTML elements using the DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var result = document.getElementById("result");

var restart = document.getElementById("restart");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", waterbender);
q1a2.addEventListener("click", earthbender);
q1a3.addEventListener("click", firebender);
q1a4.addEventListener("click", airbender);

q2a1.addEventListener("click", waterbender);
q2a2.addEventListener("click", earthbender);
q2a3.addEventListener("click", firebender);
q2a4.addEventListener("click", airbender);

q3a1.addEventListener("click", waterbender);
q3a2.addEventListener("click", earthbender);
q3a3.addEventListener("click", firebender);
q3a4.addEventListener("click", airbender);

q4a1.addEventListener("click", waterbender);
q4a2.addEventListener("click", earthbender);
q4a3.addEventListener("click", firebender);
q4a4.addEventListener("click", airbender);

q5a1.addEventListener("click", waterbender);
q5a2.addEventListener("click", earthbender);
q5a3.addEventListener("click", firebender);
q5a4.addEventListener("click", airbender);

restart.addEventListener("click", restartQuiz);

// Track waterbender score and check if quiz is complete
function waterbender() {
  waterbenderScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "waterbenderScore = " + waterbenderScore);

  if (questionCount == 5) {
  console.log("The quiz is done!");
  updateResult();
  }
}

// Track earthbender score and check if quiz is complete
function earthbender() {
  earthbenderScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "earthbenderScore = " + earthbenderScore);

  if (questionCount == 5) {
  console.log("The quiz is done!");
  updateResult();
  }
}

// Track firebender score and check if quiz is complete
function firebender() {
  firebenderScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "firebenderScore = " + firebenderScore);

  if (questionCount == 5) {
  console.log("The quiz is done!");
  updateResult();
  }
}

// Track airbender score and check if quiz is complete
function airbender() {
  airbenderScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "airbenderScore = " + airbenderScore);

  if (questionCount == 5) {
  console.log("The quiz is done!");
  updateResult();
  }
}

// Update quiz results

function updateResult() {
  if (waterbenderScore >=3){
    result.innerHTML = "You are a waterbender!";
    console.log("You are a waterbender!");
  } else if (earthbenderScore >=3){
    result.innerHTML = "You are an earthbender!";
    console.log("You are an earthbender!");
  } else if (firebenderScore >=3){
    result.innerHTML = "You are a firebender!";
    console.log("You are a firebender!");
  } else if (airbenderScore >=3){
    result.innerHTML = "You are an airbender!";
    console.log("You are an airbender!");
  } else{
    result.innerHTML = "You are not a bender.";
    console.log("You are not a bender.");
  }
}


function restartQuiz(){
  questionCount = 0;
  waterbenderScore = 0;
  earthbenderScore = 0;
  firebenderScore = 0;
  airbenderScore = 0;

  result.innerHTML = "You are...";

  console.log("questionCount = " + questionCount + " " + "waterbenderScore = " + waterbenderScore + " " + "earthbenderScore = " + earthbenderScore + " " + "firebenderScore = " + firebenderScore + " " + "airbenderScore = " + airbenderScore);
}

q1a1.addEventListener("click", disableOne);
q1a2.addEventListener("click", disableOne);
q1a3.addEventListener("click", disableOne);
q1a4.addEventListener("click", disableOne);

q2a1.addEventListener("click", disableTwo);
q2a2.addEventListener("click", disableTwo);
q2a3.addEventListener("click", disableTwo);
q2a4.addEventListener("click", disableTwo);

q3a1.addEventListener("click", disableThree);
q3a2.addEventListener("click", disableThree);
q3a3.addEventListener("click", disableThree);
q3a4.addEventListener("click", disableThree);

q4a1.addEventListener("click", disableFour);
q4a2.addEventListener("click", disableFour);
q4a3.addEventListener("click", disableFour);
q4a4.addEventListener("click", disableFour);

q5a1.addEventListener("click", disableFive);
q5a2.addEventListener("click", disableFive);
q5a3.addEventListener("click", disableFive);
q5a4.addEventListener("click", disableFive);

restart.addEventListener("click", enableQuestions);

function disableOne() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

function disableTwo() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

function disableThree() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

function disableFour() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

function disableFive() {
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
}

function enableQuestions(){
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
}
