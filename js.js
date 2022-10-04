const rock = document.getElementById('ROCK');
const paper = document.getElementById('PAPER');
const scissor = document.getElementById('SCISSOR');
const output = document.getElementById('output');
    const outPara = document.createElement('p')
    output.appendChild(outPara);

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissor.addEventListener('click', playRound);


function getComputerChoice () {
   let randomNumber = Math.floor(Math.random()*3);
   if (randomNumber === 0) {
    return "ROCK";
   }
   else if (randomNumber === 1) {
    return "PAPER";
   }
   else {
    return "SCISSOR";
   }
}; 

// function getPlayerChoice () {
//    let playerChoice = (prompt('ROCK, PAPER, OR SCISSOR')).toUpperCase();
//    return playerChoice;
// };

function playRound (e, computerSelection) {
    playerSelection = e.target.id; 
    computerSelection = getComputerChoice();
    outPara.innerText = "";

    if ((playerSelection === 'ROCK' && computerSelection === 'ROCK') || (playerSelection === 'PAPER' && computerSelection === 'PAPER') || (playerSelection === 'SCISSOR' && computerSelection === 'SCISSOR')) {
        outPara.innerText = 'DRAW!';
        return 'DRAW';
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSOR') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSOR' && computerSelection === 'PAPER')) {
        outPara.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
        return 1;
    }
    else {
        outPara.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return 0;
    }
    
};

// function game() {

//     let playerScore = 0;
//     let computerScore = 0;
//     let draw = 0; 
//     for (let i = 0; i < 5; i++) {
//         let resultOfRound = playRound(getPlayerChoice(), getComputerChoice());
//         if (resultOfRound === 1) {

//             playerScore++;
//         } 
//         else if (resultOfRound == 0) {
//             computerScore++;
//         }
//         else {
//              draw++;
//         }
//     };

//  if (playerScore > computerScore) {
//     console.log(`Player Wins, Score is ${playerScore} to ${computerScore} and Draws: ${draw}`);
//  }
//  else if(computerScore > playerScore) {
//     console.log(`Computer Wins, Score is ${computerScore} to ${playerScore} and Draws: ${draw}`);
//  }
//  else {
//     console.log(`DRAW!, SCORE: PLAYER: ${playerScore}, COMPUTER: ${computerScore}, DRAW: ${draw}`);
//  }
// };

