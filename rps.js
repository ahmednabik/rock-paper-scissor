// event listener for Night mode
let toggleSwitch = document.getElementById('switch');
toggleSwitch.addEventListener("change", toggleDayNight);

//event listener for "Reset" button
let resetButton = document.getElementById('button-28');
resetButton.addEventListener("click", clearResults);

let currentTurnNumber = 1; //initialise game count
startGame();

function startGame() {
    console.log("game started")
    clearResults();
    let clickArea = document.querySelector('.game');
    clickArea.addEventListener("click", (card) => {
        let firstPlayer = card.target.parentNode.getAttribute('data-value');
        let result = calculateResult(firstPlayer, currentTurnNumber); //return either W or L
        populateResult(result);
        if (currentTurnNumber > 5) {
            gameOver();
        }
        else {
            currentTurnNumber = currentTurnNumber + 1;
        }
    });
}
function calculateResult(firstPlayer, currentTurnNumber) {
    let gameOptions = ['rock', 'paper', 'scissor'];
    let secondPlayer = gameOptions[Math.floor(Math.random() * 3)];
    console.log(secondPlayer);
    if ((firstPlayer == "rock" && secondPlayer == "scissor") || (firstPlayer == "scissor" && secondPlayer == "paper") || (firstPlayer == "paper" && secondPlayer == "rock")) {
        return "W";
    }
    else if (firstPlayer == secondPlayer){
        return "D"
    }
    else {
        return "L";
    }

}
function populateResult(result) {
    let historyCards = document.querySelectorAll('.history-card');
    if (currentTurnNumber >= 1 && currentTurnNumber <= 5) {
        historyCards[currentTurnNumber - 1].innerHTML = result;
    }
}
function clearResults() {
    document.getElementById("game-result").innerHTML = " "; //reset the result annoucement section
    let historyCards = document.querySelectorAll('.history-card');
    historyCards.forEach(card => {
        card.innerHTML = " ";
    });
    currentTurnNumber = 1;
}
function toggleDayNight() {

    /* Toggle HTML elements */
    let toggleElements = document.getElementsByClassName('toggle');
    let toggleElementsArray = Array.from(toggleElements);
    toggleElementsArray.forEach(element => {
        element.classList.toggle("dark-mode");
    });

    /* Toggle images */
    let toggleImg = document.getElementsByClassName('img-toggle');
    let toggleImgArray = Array.from(toggleImg);


    if (!toggleSwitch.checked) {
        toggleImgArray[0].src = "img/rock.png";
        toggleImgArray[1].src = "img/paper.png";
        toggleImgArray[2].src = "img/scissor.png";
    }
    else {
        toggleImgArray[0].src = "img/rock-dark.png";
        toggleImgArray[1].src = "img/paper-dark.png";
        toggleImgArray[2].src = "img/scissor-dark.png";
    }
}
function gameOver() {
    let resultAnnouncement = document.getElementById("game-result");
    resultAnnouncement.innerHTML = "You Lose"
    //clearResults();

}