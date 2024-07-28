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
        // results.textContent = "You win! " + humanChoice + " beats " + computerChoice
        humanScore++
        humanScoreDiv.textContent = humanScore
    } else if (humanChoice == computerChoice) {
        // results.textContent = "Tie!"
    } else {
        // results.textContent = "You lose! " + computerChoice + " beats " + humanChoice
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
        results.textContent = "WINNER"
    } else if (computerScore >= 5) {
        results.textContent = "you lose :("
    }
});