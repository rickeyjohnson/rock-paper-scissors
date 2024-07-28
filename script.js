const buttons = document.querySelector("#btns-container")
const results = document.querySelector("#results")

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
        results.textContent = "You win! " + humanChoice + " beats " + computerChoice
    } else if (humanChoice == computerChoice) {
        results.textContent = "Tie!"
    } else {
        results.textContent = "You lose! " + computerChoice + " beats " + humanChoice
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
});