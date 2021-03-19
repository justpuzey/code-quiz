var highScoreBtn = document.querySelector("#highScore");
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
    createLi.textContent = allScores[i].initials + " " + allScores[i].score;
    highScore.appendChild(createLi);

  }
}