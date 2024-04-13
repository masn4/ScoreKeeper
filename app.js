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
}

function checkWinner() {
  if (parseInt(p1Score.textContent) === winningScore) {
    console.log("Player 1 wins!");
  } else if (parseInt(p2Score.textContent) === winningScore) {
    console.log("Player 2 wins!");
  }
}
const p1Butt = document.querySelector("#p1Butt");
const p2Butt = document.querySelector("#p2Butt");
const resetButt = document.querySelector("#resetButt");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const playerSelect = document.querySelector("#players");
let p1Add = 0;
let p2Add = 0;
let winningScore = 4;

p1Butt.addEventListener("click", function () {
  addScore(1);
  checkWinner();
});
p2Butt.addEventListener("click", function () {
  addScore(2);
  checkWinner();
});
resetButt.addEventListener("click", function () {
  p1Add = 0;
  p2Add = 0;
  p1Score.textContent = p1Add;
  p2Score.textContent = p2Add;
});
playerSelect.addEventListener("change", function (e) {
  console.log(winningScore);
  winningScore = parseInt(e.target.value);
  console.log(winningScore);
});
