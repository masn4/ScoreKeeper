const p1 = {
  score: 0,
  button: document.querySelector("#p1Butt"),
  display: document.querySelector("#p1Score"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Butt"),
  display: document.querySelector("#p2Score"),
};

function addScores(playerNum, opponentNum) {
  if (!gameIsOver) {
    playerNum.score += 1;
    if (playerNum.score === winningScore) {
      gameIsOver = true;
      playerNum.display.classList.add("has-text-success");
      opponentNum.display.classList.add("has-text-danger");
      playerNum.button.disabled = true;
      opponentNum.button.disabled = true;
      winningScore = 0;
    }
    playerNum.display.textContent = playerNum.score;
  }
}

function resetGame() {
  p1.display.textContent = 0;
  p2.display.textContent = 0;
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-success", "has-text-danger");
  gameIsOver = false;
  p1.button.disabled = false;
  p2.button.disabled = false;
  p1.score = 0;
  p2.score = 0;
  winningScore = 0;
}

function roundsNumber(e) {
  winningScore = parseInt(e.target.value);
}

const resetButt = document.querySelector("#resetButt");
const playerSelect = document.querySelector("#players");
let winningScore = 0;
let gameIsOver = false;

playerSelect.addEventListener("change", function (e) {
  roundsNumber(e);
});

p1.button.addEventListener("click", function () {
  addScores(p1, p2);
});
p2.button.addEventListener("click", function () {
  addScores(p2, p1);
});
resetButt.addEventListener("click", function () {
  resetGame();
});
