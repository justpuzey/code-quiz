

//----------------------------------------------
//QUESTION ARRAY
var questions = [
  {
    question: "Which of the following is true about variable naming conventions in JavaScript?",
    options: [
      "JavaScript variable names must begin with a letter or the underscore character",
      "JavaScript variable names are case sensitive",
      "Both of the above",
      "None of the above"],
    answer: "Both of the above"
  },
  {
    question: "Which of the following is the correct syntax to print a page using JavaScript?",
    options: [
      "window.print();",
      "browser.print();",
      "navigator.print();",
      "document.print();"],
    answer: "window.print();"
  },
  {
    question: "Which of the following type of variable takes precedence over other if names are same?",
    options: [
      "global variable;",
      "local variable",
      "Both of the above.",
      "None of the above"],
    answer: "local variable"
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
  },
  {
    question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    options: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log"
  },
];

var questionEl = document.querySelector("h2");
var pEl = document.querySelector("p");
var timerEl = document.querySelector("#timer");
var questionResult = document.querySelector('#question-result');
var questionIndex = ""
var timerStart = questions.length * 15;
var timeLeft = 0;
var optionsUl = ""


//----------------------------------------------
//START QUIZ
var startEl = document.querySelector("#start-btn");
startEl.addEventListener("click", function () {
  //Remove Button
  startEl.remove();
  //Start the timer
  setTtimer()
  //Render the first question
  questionIndex = 0
  renderQ(questionIndex)
});

//----------------------------------------------
//RENDER QUESTIONS
var renderQ = function (questionIndex) {
  optionsUl = document.querySelector("#optionsUl");
  //clear out the heading text
  questionEl.innerHTML = "";
  pEl.innerHTML = "";
  optionsUl.innerHTML = "";
  //render question
  questionEl.textContent = questions[questionIndex].question;
  //append list items to ul
  var optionsUl = document.querySelector("#optionsUl");
  for (i = 0; i < questions[questionIndex].options.length; i++) {
    var optionItem = document.createElement("li")
    optionItem.textContent = questions[questionIndex].options[i];
    optionsUl.appendChild(optionItem);
    optionItem.addEventListener("click", (evaluate));
  }
}
//----------------------------------------------
//TIMER FUNCTION
var setTtimer = function () {
  var holdInterval = 0;
  timeLeft = timerStart;
  timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "Time's up!";
      endQuiz();
    }
  }, 1000);
}
//----------------------------------------------
//EVALUATE SELECTED RESPONSE TO QUESTION
var evaluate = function (event) {
  var selectedEl = event.target.textContent;
  optionsUl = document.querySelector("#optionsUl");
  questionResult.classList.add("question-result")

  if (selectedEl === questions[questionIndex].answer) {
    questionResult.textContent = "Correct! The answer is: " + questions[questionIndex].answer;
  }
  else {
    questionResult.textContent = "Sorry, that is incorrect. The correct answer is: " + questions[questionIndex].answer;
    timeLeft -= 10;
  };
  console.log('index = ' + (questionIndex + 1))
  console.log('questions = ' + questions.length)
  if ((questionIndex + 1) == questions.length) {
    endQuiz();
  }
  else {
    questionIndex++
    renderQ(questionIndex)
  }
}
//----------------------------------------------
//END QUIZ FUNCTION
var questionDiv = document.querySelector('.question-div');
var endQuiz = function () {
  questionEl.innerHTML = "";
  optionsUl.innerHTML = "";
  questionEl.textContent = "All done!";
  pEl.textContent = "Your final score is " + timeLeft
  // Label
  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your initials: ";
  questionDiv.appendChild(createLabel);

  // input
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";
  questionDiv.appendChild(createInput);

  // submit
  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";
  questionDiv.appendChild(createSubmit);

  // Event listener to capture initials and local storage for initials and score
  createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    var finalScore = {
      initials: initials,
      score: timeLeft
    }

    console.log(finalScore)

    var highScores = localStorage.getItem("highScores");
    if (highScores === null) {
      highScores = [];
    }
    else {
      highScores = JSON.parse(highScores);
    }
    highScores.push(finalScore);
    var newScore = JSON.stringify(highScores);
    localStorage.setItem("highScores", newScore);

    window.location.replace("./assets/HTML/highscores.html");
  });
};
