// const p1 = {
//   score: 0,
//   button: document.querySelector("#p1Butt"),
// };

// const p2 = {
//   score: 0,
//   button: document.querySelector("#p2Butt"),
// };

function addScore(playerNum) {
  if (playerNum === 1) {
    p1Add += 1;
    p1Score.textContent = p1Add;
  } else if (playerNum === 2) {
    p2Add += 1;
    p2Score.textContent = p2Add;
  } else {
    console.log("Invalid player number");
  }
  checkWinner();
}

function checkWinner() {
  if (parseInt(p1Score.textContent) === winningScore) {
    console.log("Player 1 wins!");
    p1Score.classList.add("has-text-success");
    p2Score.classList.add("has-text-danger");
    gameIsOver = true;
  } else if (parseInt(p2Score.textContent) === winningScore) {
    console.log("Player 2 wins!");
    p2Score.classList.add("has-text-success");
    p1Score.classList.add("has-text-danger");
    gameIsOver = true;
  }
  if (gameIsOver) {
    console.log("Game is over!");
    p1Butt.disabled = true;
    p2Butt.disabled = true;
  } else {
    console.log("ERORRR");
  }
}

function resetGame() {
  p1Add = 0;
  p2Add = 0;
  p1Score.textContent = p1Add;
  p2Score.textContent = p2Add;
  p1Score.classList.remove("has-text-success", "has-text-danger");
  p2Score.classList.remove("has-text-success", "has-text-danger");
  gameIsOver = false;
  p1Butt.disabled = false;
  p2Butt.disabled = false;
}

function roundsNumber() {
  winningScore = parseInt(e.target.value);
}

const p1Butt = document.querySelector("#p1Butt");
const p2Butt = document.querySelector("#p2Butt");
const resetButt = document.querySelector("#resetButt");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const playerSelect = document.querySelector("#players");
let p1Add = 0;
let p2Add = 0;
let winningScore = 0;

playerSelect.addEventListener("change", function (e) {
  roundsNumber();
});

p1Butt.addEventListener("click", function () {
  addScore(1);
});
p2Butt.addEventListener("click", function () {
  addScore(2);
});
resetButt.addEventListener("click", function () {
  resetGame();
});
