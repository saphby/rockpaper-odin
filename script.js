function getComputerChoice() {
    let ranNum = Math.random()    
    if (ranNum < 1/3) {
        return `Rock`
    } else if ((ranNum > 1/3) && (ranNum < 2/3)) {
        return `Paper`
    } else if (ranNum > 2/3) {
        return `Scissors`
    }
}

function getHumanChoice() {
    let question = prompt(`Rock, Paper or Scissors`)     
    return question    
}

 
function playRound() {    
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    let humanLower = humanChoice.toLowerCase()
    if (humanLower == `rock` && computerChoice == `Scissors`) {
        humanScore++        
        console.log(`You Win! Rock DESTROYS Scissors`) 
    } else if (humanLower == `scissors` && computerChoice == `Rock`) { 
        computerScore++       
        console.log(`You Lose! Rock DESTROYS Scissors`)
    } else if (humanLower == `paper` && computerChoice == `Rock` ) { 
        humanScore++       
        console.log(`You Win! Paper SUFFOCATES Rock`)
    } else if (humanLower == `rock` && computerChoice == `Paper`) { 
        computerScore++       
        console.log(`You Lose! Paper SUFFOCATES Rock`)
    } else if (humanLower == `scissors` && computerChoice == `Paper`) {
        humanScore++        
        console.log(`You Win! Scissors SLICE & DICE Paper`)  
    } else if (humanLower == `paper` && computerChoice == `Scissors`) { 
        computerScore++       
        console.log(`You Lose! Scissors SLICE & DICE Paper`)
    } else if (humanLower == computerChoice.toLowerCase()) {                
        console.log(`Absolute DooDoo! How u draw with a comp`)
    }
       
} 
let humanScore = 0
let computerScore = 0

function playGame() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    if (humanScore > computerScore) {
        console.log(`Human Wins!`)
    } else if (computerScore > humanScore) {
        console.log(`Computer Wins`)
    } else if (computerScore == humanScore) {
        console.log(`Draw!`)
    }
}

playGame()
