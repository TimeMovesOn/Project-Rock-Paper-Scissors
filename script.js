let math = Math.floor(Math.random()*(3) +1);

let wins = document.getElementById("win")
let winCount = 0
document.getElementById("win").innerHTML = winCount

let loss = document.getElementById("loss")
let lossCount = 0
document.getElementById("loss").innerHTML = lossCount

let tie = document.getElementById("tie")
let tieCount = 0
document.getElementById("tie").innerHTML = tieCount


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
        ++tieCount
        document.getElementById("tie").innerHTML = tieCount
    }
    else if(math == 2){
        console.log("Loss")
        ++lossCount
        document.getElementById("loss").innerHTML = lossCount
    }
    else{
        console.log("Win")
        ++winCount
        document.getElementById("win").innerHTML = winCount
    }
}
function getPlayerChoicePaper(){
    if (math == 1 ){
        console.log("Win")
        ++winCount
        document.getElementById("win").innerHTML = winCount
    }
    else if(math == 2){
        console.log("Tie")
        ++tieCount
        document.getElementById("tie").innerHTML = tieCount
    }
    else{
        console.log("Loss")
        ++lossCount
        document.getElementById("loss").innerHTML = lossCount
        }
}
function getPlayerChoiceScissors(){
    if (math == 1 ){
        console.log("Loss")
        ++lossCount
        document.getElementById("loss").innerHTML = lossCount
    }
    else if(math == 2){
        console.log("Win")
        ++winCount
        document.getElementById("win").innerHTML = winCount
    }
    else{
        console.log("Tie")
        ++tieCount
        document.getElementById("tie").innerHTML = tieCount
    }
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

  }