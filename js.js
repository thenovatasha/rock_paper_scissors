let playerScore = 0;
let computerScore = 0;
let draw = 0; 

    const rock = document.getElementById('ROCK');
    const paper = document.getElementById('PAPER');
    const scissor = document.getElementById('SCISSOR');
    const output = document.getElementById('output');
    
    const outPara = document.createElement('p')
    output.appendChild(outPara);
    const outScore = document.createElement('p');
    output.appendChild(outScore);
    const resultofGame = document.createElement('p');
    output.appendChild(resultofGame);



    rock.addEventListener('click', game);
    paper.addEventListener('click', game);
    scissor.addEventListener('click', game);



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

    function game(e) {

        if (playerScore == 0 && computerScore == 0) {
            resultofGame.innerText = '';
        }
    let resultOfRound = playRound(e);
            if (resultOfRound === 1) {

                playerScore++;
            } 
            else if (resultOfRound == 0) {
                computerScore++;
            }
            else {
                draw++;
            }
            outScore.innerText = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;    

        if (playerScore == 5 || computerScore == 5) {
        
        
        if (playerScore == 5) {
            resultofGame.innerText = 'Player Wins!'
            outScore.innerText = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        } 
        else {
            resultofGame.innerText = 'Computer Wins';
            outScore.innerText = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        }
        }

        

        

    };

