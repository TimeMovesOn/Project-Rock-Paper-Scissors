let math = Math.floor(Math.random()*(3) +1);
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

document.getElementById("win").innerHTML =
document.getElementById("loss")
document.getElementById("tie")

function getComputerChoice(){
    if (math == 1){
        console.log("Rock")
        return "Rock"
    }
    else if (math == 2){
        console.log("Paper")
        return "Paper"
    }
    else {
        console.log("Scissors")
        return "Scissors"
    };
}
function getPlayerChoiceRock(){
    if (math == 1 ){
        console.log("Tie")
    }
    else if(math == 2){
        console.log("Loss")
    }
    else{
        console.log("Win")
    }
}
function getPlayerChoicePaper(){
    if (math == 1 ){
        console.log("Win")
    }
    else if(math == 2){
        console.log("Tie")
    }
    else{
        console.log("Loss")
    }
}
function getPlayerChoiceScissors(){
    if (math == 1 ){
        console.log("Loss")
    }
    else if(math == 2){
        console.log("Win")
    }
    else{
        console.log("Tie")
    }
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if( getComputerChoice == rock){

    }
  }