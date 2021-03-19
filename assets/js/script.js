

//questions array
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
  },
  {
    title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    options: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log"
  },

];

var questionIndex = ""
var timerStartAmount = questions.length * 20;
var questionEl = document.querySelector("h2");
var pEl = document.querySelector("p");
var optionsUl = ""

//Start the quiz when button clicked
var startEl = document.querySelector("#start-btn");
startEl.addEventListener("click", function () {

  //Remove Button
  startEl.remove();

  questionIndex = 0
  renderQ(questionIndex)
});

//Render a New question
var renderQ = function (questionIndex) {

  optionsUl = document.querySelector("#optionsUl");

  //clear out the heading text
  questionEl.innerHTML = "";
  pEl.innerHTML = "";
  optionsUl.innerHTML = "";

  //render question
  questionEl.textContent = questions[questionIndex].title;

  //append list items to ul
  var optionsUl = document.querySelector("#optionsUl");

  for (i = 0; i < questions[questionIndex].options.length; i++) {
    var optionItem = document.createElement("li")
    optionItem.textContent = questions[questionIndex].options[i];
    optionsUl.appendChild(optionItem);
    optionItem.addEventListener("click", (evaluate));
  }
}

var evaluate = function (event) {
  var selectedEl = event.target.textContent;
  var questionResult = document.querySelector('#question-result');
  optionsUl = document.querySelector("#optionsUl");
  questionResult.classList.add("question-result")

  if (selectedEl === questions[questionIndex].answer) {
    questionResult.textContent = "Correct! The answer is: " + questions[questionIndex].answer;
  }
  else {
    questionResult.textContent = "Sorry, that is incorrect. The correct answer is: " + questions[questionIndex].answer;
  };

  console.log('index = ' + (questionIndex + 1))
  console.log('questions = ' + questions.length)

  if ((questionIndex + 1) == questions.length) {
    questionEl.innerHTML = "";
    optionsUl.innerHTML = "";
    questionEl.textContent = "all done";
    pEl.textContent = "Your final score is 22"
  }
  else {
    questionIndex++
    renderQ(questionIndex)
  }
}

