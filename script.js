function getComputerChoice() {
    let ranNum = Math.random()
    console.log(ranNum)
    if (ranNum < 1/3) {
        console.log(`Rock`)
    } else if ((ranNum > 1/3) && (ranNum < 2/3)) {
        console.log(`Paper`)
    } else if (ranNum > 2/3) {
        console.log(`Scissors`)
    }
}

function getHumanChoice() {
    let question = prompt(`Rock, Paper or Scissors`)
    console.log(question) 
    return question    
}
getComputerChoice()
getHumanChoice()