// Get the buttons
const rock = document.getElementById("rock-logo");
const paper = document.getElementById("paper-logo");
const scissors = document.getElementById("scissors-logo");

// Get the score elements
let you = document.getElementById("score-player");
let computer = document.getElementById("score-comp");

let yourScore = 0;
let computerScore = 0;

you.innerHTML = 0
computer.innerHTML = 0


// Putting onclick for displaying the player's hand
rock.onclick = () => {
    var img = document.getElementById("img");
    img.src = "./assets/rock-hand.png";
    compareHands()
}

paper.onclick = () => {
    var img = document.getElementById("img");
    img.src = "./assets/paper-hand.png";
    compareHands()
}

scissors.onclick = () => {
    var img = document.getElementById("img");
    img.src = "./assets/scissors-hand.png";
    compareHands()
}

// Computer random
var images = [
    "./assets/rock-hand.png",
    "./assets/paper-hand.png",
    "./assets/scissors-hand.png"
];

function random() {
    const randomImg = Math.floor(Math.random() * images.length);
    var img = document.getElementById("img-comp");
    img.src = images[randomImg];
}

// Compare hands and increment scores
function compareHands() {
    random(); 

    // Get the computer's choice
    const imgYou = document.getElementById("img") 
    const imgComp = document.getElementById("img-comp");
    const computerChoice = imgComp.src;

    // Determine the winner based on choices
    // if(playerChoice ==="./assets/rock-hand.png" && computerChoice === "./assets/scissors-hand.png"){
    //     console.log("hi")
    // }


    if (
        (imgYou === "./assets/rock-hand.png" && computerChoice === "./assets/scissors-hand.png") ||
        (imgYou === "./assets/paper-hand.png" && computerChoice === "./assets/rock-hand.png") ||
        (imgYou === "./assets/scissors-hand.png" && computerChoice === "./assets/paper-hand.png")
    ) {
        // Player wins
        console.log("hi")
    } else {
        // Computer wins
        // computerScore++;
    }

    // Update the score display
    you.innerHTML = yourScore;
    computer.innerHTML = computerScore;
}

// You can add more logic for handling ties and declaring a winner as per your game's rules.
