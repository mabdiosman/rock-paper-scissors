const characters = document.querySelector(".characters");
const closeMessage = document.querySelector(".close-message");
let playerScore = document.querySelector("#player");
let computerScore = document.querySelector("#computer");

// Score count
let playerScoreCount = 0;
let computerScoreCount = 0;

// Get computer choice
function getComputerChoice() {
  let random = Math.floor(Math.random() * 5);
  let computerChoice = "";
  switch (random) {
    case 0:
      computerChoice = "childs";
      break;
    case 1:
      computerChoice = "blair";
      break;
    case 2:
      computerChoice = "bennings";
      break;
    case 3:
      computerChoice = "palmer";
      break;
    case 4:
      computerChoice = "nauls";
      break;
  }
  return computerChoice;
}

characters.addEventListener("click", (e) => {
  if (e.target.classList.contains("character")) {
    playRound(e.target.parentElement);
  }
});

const playerImage = document.querySelector("#player-image");
const computerImage = document.querySelector("#computer-image");

// Play single round
function playRound(target) {
  const playerChoice = document.querySelector("#player-choice");
  const computerChoice = document.querySelector("#computer-choice");

  if (playerScoreCount == 5 || computerScoreCount == 5) {
    if (playerScoreCount > computerScoreCount) {
      displayResult("You won!");
    } else {
      displayResult("You lost!");
    }
  }
  if (getComputerChoice() == target.id) {
    playerScoreCount += 1;
    changeOpponentBackground(1);
    displayCount(1);
  } else {
    computerScoreCount += 1;
    changeOpponentBackground(2);
    displayCount(2);
  }
  playerChoice.textContent = target.id;
  computerChoice.textContent = getComputerChoice();
}

function displayCount(result) {
  if (result === 1) {
    playerScore.textContent = playerScoreCount;
  } else {
    computerScore.textContent = computerScoreCount;
  }
}

function displayResult(result) {
  const modal = document.querySelector(".gameover");
  const finalResult = document.querySelector(".final-result");
  modal.classList.add("visible");
  finalResult.textContent = result;
}

function changeOpponentBackground(target) {
  if (target == 1) {
    playerImage.setAttribute("src", "./images/gifs/torchit.webp");
    computerImage.setAttribute("src", "./images/thething1.webp");
  } else {
    computerImage.setAttribute("src", "./images/gifs/thething.gif");
    playerImage.setAttribute("src", "./images/macready.webp");
  }
}

// Close introduction container
closeMessage.addEventListener("click", () => {
  document.querySelector(".message-container").style.display = "none";
});
