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

function getHumanChoice() {
    return prompt('Enter rock, paper, or scissors: ').toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'scissors')
    || (humanChoice == 'paper' && computerChoice == 'rock')
    || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        console.log("You win! " + humanChoice + " beats " + computerChoice)
    } else if (humanChoice == computerChoice) {
        console.log("Tie!")
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
    }
}

const buttons = document.querySelector("#btns-container")

buttons.addEventListener('click', (event) => {
    let target = event.target

    switch(target.id) {
        case 'rock':
            console.log('rock')
            break
        case 'paper':
            console.log('paper')
            break
        case 'scissors':
            console.log('scissors')
            break
        default:
            console.log('something broken')
    }
});
