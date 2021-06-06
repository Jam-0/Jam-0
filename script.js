let seasonScores = [];
let careerScores = [];

function singleScore() {
  let startGame = Math.floor(Math.random() * 30);
  let midGame = Math.floor(Math.random() * 50);
  let endGame = Math.floor(Math.random() * 60);
  let recordGame = Math.floor(Math.random() * 100);
  let score = 0;

  //match logic

  if (startGame < 20) {
    score = startGame;
  }

  if (startGame >= 20) {
    score = startGame + midGame;
  }

  if (midGame >= 37) {
    score = startGame + midGame + endGame;
  }

  if (endGame > 55) {
    score = startGame + midGame + endGame + recordGame;
  }

  return score;
}

function printSeason() {
  let seasonAve = 0;
  let seasonRuns = 0;

  for (var match = 0; match < 21; match++) {
    season[match] = singleScore();

    seasonRuns += season[match];
  }

  seasonAve = seasonRuns / 20;

  return `Batsman has scored ${seasonRuns} runs throughout the season at an average of ${seasonAve}`;
}

function runCareer(age) {
  let careerAve = 0;

  let careerRuns = 0;

  let years = 0;

  let cent = 0;

  let fifty = 0;

  let ducks = 0;

  for (age; age <= 35; age++) {
    years++;

    for (var match = 0; match < 21; match++) {
      careerScores.push(singleScore());
    }
  }

  for (let i = 0; i < careerScores.length; i++) {
    if (careerScores[i] >= 50) {
      fifty++;
    }

    if (careerScores[i] >= 100) {
      fifty--;

      cent++;
    }

    careerRuns += careerScores[i];
  }

  careerAve =
    careerRuns / (careerScores.length - Math.floor(Math.random() * 10 + 15));

  return `Batsman has scored ${careerRuns} first class runs over their career in ${
    careerScores.length / 2 - Math.floor(Math.random() * -15 + 15)
  } matches, at an average of ${Math.round(careerAve)} with ${
    cent - Math.floor(Math.random() * 7)
  } centuries`;
}

function displayCareer() {
  careerScores.forEach(thisFunction);
  function thisFunction(item, index) {
    document.getElementById("career").innerHTML += " Score: " + item + "<BR>";
  }

  careerScores.toString();
  document.querySelector(".career").textContent = careerScores;
  console.log(careerScores);
}

document.querySelector(".careerB").addEventListener("click", function () {
  document.querySelector(".careerS").textContent = runCareer(18);
  document.querySelector(".flash").textContent = "";
  displayCareer();
});
