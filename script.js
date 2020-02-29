let choices = ["rock","paper","scissors"];
let div_rock = document.querySelector("#rock");
let div_paper = document.querySelector("#paper");
let div_scissors = document.querySelector("#scissors");
let computerScore = 0;
let playerScore = 0;
let gameRound = 0;
let playerSelection;
let images = document.querySelectorAll(".image");
let restart = document.querySelector("#restart");


div_rock.addEventListener("click", function(){
    playerSelection = "rock";
    playGame(playerSelection);
});

div_paper.addEventListener("click", function(){
    playerSelection = "paper";
    playGame(playerSelection);
});

div_scissors.addEventListener("click", function(){
    playerSelection = "scissors";
    playGame(playerSelection);
});

function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
            return "Its a tie. You both made the same selection";
        } 
        if(playerSelection == choices[0]) {
            if(computerSelection == choices[1]) {
                computerScore++;
                return "You lose! paper beats rock";
            } else {
                playerScore++;
                return "You win! rock crushes scissors";
            }

        } else if(playerSelection == choices[1]) {
            if(computerSelection == choices[2]) {
                computerScore++;
                return "You lose! scissors cuts paper";
            } else {
                playerScore++;
                return "You win! paper beats rock";
            }
        } else if(playerSelection == choices[2]) {
            if(computerSelection == choices[0]) {
                computerScore++;
                return "You lose! rock beats scissors";
            } else {
                playerScore++;
                return "You win! scissors cuts paper";
            }
        } else {
            return "Invalid selection. Please choose either rock, paper or scissors";
        }
    }
function checkRound(){
    if(playerScore == 5 || computerScore == 5){
        document.querySelector(".game-over").textContent = "game over!!!"
        document.querySelector(".outcome").textContent = getWinner(playerScore, computerScore);
        for (let i = 0; i < images.length; i++) {
            images[i].classList.add("hide");
        }
        document.querySelector("#restart").classList.remove("hide");
    }
}

function playGame(playerSelection){
    gameRound++;
    document.querySelector("#begin").textContent = `Round ${gameRound}`;
    let computerSelection = computerPlay();
    document.querySelector(".response1").textContent = `Computer chose: ${computerSelection}.`;
    document.querySelector(".response2").textContent = `You chose: ${playerSelection}.`;
    document.querySelector(".outcome").textContent = playRound(playerSelection, computerSelection);
    document.querySelector('.game-info').textContent = "";
    document.querySelector("#yourscore").textContent = playerScore;
    document.querySelector("#compscore").textContent = computerScore;
    checkRound();
}

function getWinner(playerScore, computerScore){
    if(playerScore > computerScore){
        return "Congratulations, you win the game! 🎊 😊 🎊";
    }else if(playerScore < computerScore){
        return "Too bad, you lose the game..Try again 😢";
    }else{
        return "Wheew, what a game. You tied!!"
    }
}

function restartGame(){
    for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("hide");
        }
        document.querySelector('.game-over').textContent = "";
        document.querySelector('.game-info').textContent = "First to 5 wins";
        document.querySelector("#begin").textContent = "Make your move";
        document.querySelector(".response1").textContent = "";
        document.querySelector(".response2").textContent = "";
        document.querySelector(".outcome").textContent = "";
        document.querySelector("#yourscore").textContent = 0;
        document.querySelector("#compscore").textContent = 0;
        restart.classList.add("hide");
        computerScore = 0;
        playerScore = 0;
        gameRound = 0;
}


restart.addEventListener("click", restartGame);


// function randomColor(){
//      let hexValue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//      let hexLength = hexValue.length;
//      let hex = "#";
//      for(i=0; i<6; i++){
//          let randomValue = Math.floor(Math.random() * hexLength);
//          hex += hexValue[randomValue];
//      }
//      console.log(hex)
//      return hex;
//  }
//  //to change body color
//  function bodyColor() {
//      document.getElementById('body').style.backgroundColor = randomColor();
//  }