const buttons = document.querySelector("#btns-container")
const results = document.querySelector("#results")
const humanScoreDiv = document.querySelector(".human")
const computerScoreDiv = document.querySelector(".computer")

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomNum = parseInt(Math.random() * 3)
    let computerChoice

    if (randomNum == 0) {
        computerChoice = 'rock'
    } else if (randomNum == 1) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }

    return computerChoice
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'scissors')
    || (humanChoice == 'paper' && computerChoice == 'rock')
    || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        console.log("you win that round")
        humanScore++
        humanScoreDiv.textContent = humanScore
    } else if (humanChoice == computerChoice) {
        console.log("tie that round")
    } else {
        console.log("you lose that round")
        computerScore++
        computerScoreDiv.textContent = computerScore
    }
}

buttons.addEventListener('click', (event) => {
    let target = event.target

    switch(target.id) {
        case 'rock':
            playRound('rock', getComputerChoice())
            break
        case 'paper':
            playRound('paper', getComputerChoice())
            break
        case 'scissors':
            playRound('scissors', getComputerChoice())
            break
        default:
            console.log('something broken')
    }

    if (humanScore >= 5) {
        results.textContent = "winner"
    } else if (computerScore >= 5) {
        results.textContent = "loser"
    }
});