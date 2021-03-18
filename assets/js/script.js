

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

//Start the quiz when button clicked

var startEl = document.querySelector("#start-btn");
startEl.addEventListener("click", function () {

  alert("start the quiz!")
  renderQ(0)

});

//Render a New question
var renderQ = function (questionIndex) {
  var questionEl = document.querySelector("h1");
  var pEl = document.querySelector("p");

  //clear out the heading text
  questionEl.innerHTML = "";
  pEl.innerHTML = "";

  //render question
  questionEl.textContent = questions[questionIndex].title;

  //append list items to ul
  var optionsUl = document.querySelector("#optionsUl");


  for (i = 0; i < questions[questionIndex].options.length; i++) {
    var optionItem = document.createElement("li")
    optionItem.textContent = questions[questionIndex].options[i];
    optionsUl.appendChild(optionItem);
  }
}


