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

function getPlayerChoice () {
   let playerChoice = (prompt('ROCK, PAPER, OR SCISSOR')).toUpperCase();
   return playerChoice;
};

function playRound (playerSelection, computerSelection) {
    if ((playerSelection === 'ROCK' && computerSelection === 'ROCK') || (playerSelection === 'PAPER' && computerSelection === 'PAPER') || (playerSelection === 'SCISSOR' && computerSelection === 'SCISSOR')) {
        console.log('DRAW!');
        return 'DRAW';
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSOR') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSOR' && computerSelection === 'PAPER')) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }
    else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return 0;
    }
};

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let draw = 0; 
    for (let i = 0; i < 5; i++) {
        let resultOfRound = playRound(getPlayerChoice(), getComputerChoice());
        if (resultOfRound === 1) {

            return ++playerScore;
        } 
        else if (resultOfRound == 0) {
            return ++computerScore;
        }
        else {
            return ++draw;
        }
    };

 //if (playerScore > computerScore) {
 //   console.log(`Player Wins, Score is ${playerScore} to ${computerScore} and Draws: ${draw}`);
 //}
 //else if(computerScore > playerScore) {
 //   console.log(`Computer Wins, Score is ${computerScore} to ${PlayerScore} and Draws: ${draw}`);
 //}
 //else {
 //   console.log(`DRAW!, SCORE: PLAYER: ${playerScore}, COMPUTER: ${computerScore}, DRAW: ${draw}`);
 //}
};