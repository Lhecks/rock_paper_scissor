
let user = 0;
let computer = 0;
const gameArray = ["Rock", "Paper", "Scissor"];
let userScore = document.querySelector('.userScoreNumber');
let finalSay = document.querySelector('.final_say > p')
var computerScore = document.querySelector('.comptScoreNumber');
var imageRock = document.querySelector('#image_rock');
var imagePaper = document.querySelector('#image_paper');
var imageScissor = document.querySelector('#image_scissor');

userPlaying();
computerPlayer();
function computerPlayer() {
    var computerArrayIndex = Math.floor(Math.random() * 3)
    return gameArray[computerArrayIndex];
}

// displayResultMessage();

function takeShot(playerSelection, computerSelection) {
    user++;
    userScore.innerHTML = user;
    computerScore.innerHTML = computer;
    console.log(`You win choosing ${playerSelection} over the Computer choosing ${computerSelection} `)
}

function looseShot(playerSelection, computerSelection) {
    computer++;
    computerScore.innerHTML = computer;
    userScore.innerHTML = user;
    console.log(`You Lose! ${computerSelection} beats  ${playerSelection}`)
}

function drawScore(playerSelection, computerSelection) {
    userScore.innerHTML = user;
    computerScore.innerHTML = computer;
    console.log(`Your choices are the same: ${playerSelection} and ${computerSelection}`)
}

function computerPlay(playerSelection) {
    const computerSelection = computerPlayer();
    switch (playerSelection + " " + computerSelection) {
        case 'Scissor Paper':
        case 'Rock Scissor':
        case 'Paper Rock':
            takeShot(playerSelection, computerSelection);
            break;
        case 'Paper Scissor':
        case 'Scissor Rock':
        case 'Rock Paper':
            looseShot(playerSelection, computerSelection);
            break;
        case 'Rock Rock':
        case 'Paper Paper':
        case 'Scissor Scissor':
            drawScore(playerSelection ,computerSelection);
            break;
    }
}

function userPlaying() {
    imageRock.addEventListener('click', function () {
        computerPlay('Rock')
    });

    imagePaper.addEventListener('click', function () {
        computerPlay('Paper')
    });

    imageScissor.addEventListener('click', function () {
        computerPlay('Scissor')
    });
}

function displayResultMessage() {
    // if(user== 20 && user >) return 
//     if (user > computer) return finalSay.replaceWith(`You win choosing ${playerSelection} over the Computer choosing ${computerSelection} `)
//     if (computer > user) return finalSay.replaceWith(`You have lost choosing ${playerSelection} over the Computer choosing ${computerSelection} `)
//     finalSay.replaceWith(`Draw Round, you have made the same choice: ${playerSelection} == ${computerSelection} `)
}