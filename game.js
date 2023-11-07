// Get the buttons
const rock = document.getElementById("rock-logo");
const paper = document.getElementById("paper-logo");
const scissors = document.getElementById("scissors-logo");

// Get the score elements
let you = document.getElementById("score-player");
let computer = document.getElementById("score-comp");

var yourScore = 0;
var computerScore = 0;

you.innerHTML = 0
computer.innerHTML = 0

var yourChoice;
// Putting onclick for displaying the player's hand
rock.onclick = () => {
    var img = document.getElementById("img");
    img.src = "./assets/rock-hand.png";
    yourChoice= "r1"
    random()
    decide()

}

paper.onclick = () => {
    var img = document.getElementById("img");
    img.src = "./assets/paper-hand.png";
    yourChoice="p1"
    random()
    decide()
}

scissors.onclick = () => {
    var img = document.getElementById("img");
    img.src = "./assets/scissors-hand.png";
    yourChoice="s1"
    random()
    decide()
}

// Computer random
var images = [
    "./assets/rock-hand.png",
    "./assets/paper-hand.png",
    "./assets/scissors-hand.png"
];

var compChoice;

function random() {
    var randomImg = Math.floor(Math.random() * images.length);
    var img = document.getElementById("img-comp");
    img.src = images[randomImg];
    if(randomImg === 0){
        compChoice = "r1"
        console.log("1")
    }
    else if(randomImg === 1){
        compChoice = "p1"
        console.log("2")
    }
    else{
        compChoice = "s1"
        console.log("3")
    }
}

function decide(){
    if (yourChoice === "r1"){
        if (compChoice === "s1"){
            yourScore++
            checkScore()
        }else if (compChoice === "p1"){
            computerScore++
            checkScore()
        }
    }
    else if (yourChoice === "p1"){
        if (compChoice === "r1"){
            yourScore++
            checkScore()
        }else if (compChoice === "s1"){
            computerScore++
            checkScore()
        }
    }
    else if (yourChoice === "s1"){
        if (compChoice === "p1"){
            yourScore++
            checkScore()
        }else if (compChoice === "r1"){
            computerScore++
            checkScore()
        }
    }
    
    you.textContent = yourScore;
    computer.textContent = computerScore;
}



function checkScore(){
    var winner = document.getElementById("winner")
    const score = document.getElementById("score")
    if(yourScore==5){
        winner.innerHTML = "You"
        score.style.display = "block"
        
    }
    else if (computerScore==5){
        winner.innerHTML = "Computer"
        score.style.display = "block"
    }
    
    
}

document.getElementById("play-again").addEventListener("click", ()=>{
    location.href = "./index.html"
})