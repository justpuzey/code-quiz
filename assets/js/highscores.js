var highScoreUl = document.querySelector("#highScoreUl");
var clearBtn = document.querySelector("#clear");
var goBackBtn = document.querySelector("#go-back");

clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

var highScores = localStorage.getItem("highScores");
highScores = JSON.parse(highScores);

if (highScores !== null) {

  for (var i = 0; i < highScores.length; i++) {

    var createLi = document.createElement("li");
    createLi.textContent = highScores[i].initials + " " + highScores[i].score;
    highScoreUl.appendChild(createLi);

  }
}