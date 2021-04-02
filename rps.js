const scoreA = document.getElementById("scoreboard");
const result = document.getElementById("result");
const compMove = document.getElementById("compMove");
var userScore = 0;
var compScore = 0;

const throw_rock = document.getElementById("rock_btn");
throw_rock.addEventListener("click", pickRock);

const throw_paper = document.getElementById("paper_btn");
throw_paper.addEventListener("click", pickPaper);

const throw_scissors = document.getElementById("scissors_btn");
throw_scissors.addEventListener("click", pickScissors);


function pickRock() {
    let userChoice = 0;
    var compChoice = Math.floor(Math.random() * 3);
    winLoseDraw(userChoice, compChoice);
}

function pickPaper() {
    let userChoice = 1;
    var compChoice = Math.floor(Math.random() * 3);
    winLoseDraw(userChoice, compChoice);
}

function pickScissors() {
    let userChoice = 2;
    var compChoice = Math.floor(Math.random() * 3);
    winLoseDraw(userChoice, compChoice);
}



function winLoseDraw(userChoice, compChoice) {
    if (userChoice === 0) {
        if (compChoice === 0) {
            compMove.textContent = "Rock!"
            result.textContent = "It's a draw!";
        } else if (compChoice === 1) {
            ++compScore
            compMove.textContent = "Paper!";
            result.textContent = "You lose!";
        } else if (compChoice === 2) {
            ++userScore
            compMove.textContent = "Scissors!";
            result.textContent = "You win!";
        }
    } else if (userChoice === 1) {
        if (compChoice === 0) {
            ++userScore
            compMove.textContent = "Rock!";
            result.textContent = "You win!";
        } else if (compChoice === 1) {
            compMove.textContent = "Paper!";
            result.textContent = "It's a draw!";
        } else if (compChoice === 2) {
            ++compScore
            compMove.textContent = "Scissors!";
            result.textContent = "You lose!";
        }
    } else if (userChoice === 2) {
        if (compChoice === 0) {
            ++compScore;
            compMove.textContent = "Rock!";
            result.textContent = "You lose!";
        } else if (compChoice === 1) {
            ++userScore;
            compMove.textContent = "Paper!"
            result.textContent = "You win";
        } else if (compChoice === 2) {
            compMove.textContent = "Scissors!"
            result.textContent = "It's a draw!";
        }
    }
    let board = "Player:  " + userScore + "    ---    " + "Computer:  " + compScore;
    scoreA.textContent = board;


};


