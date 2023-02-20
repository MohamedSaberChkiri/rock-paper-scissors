const result = document.querySelector('#winner')
const possibleChoices = document.querySelectorAll('.game')
const choiceOfPc = document.querySelector('#computer-choice')
const userScore = document.querySelector('#user-score')
const pcScore = document.querySelector('#pc-score')
const showWinnerText = document.getElementById('showWinner')
const modalBlur = document.querySelector('.modal')
const modalText = document.querySelector('.modal-content')
const resetBtn = document.querySelector('.reset')

let userChoice
let ComputerChoice
let results
let uScore = 0
let cScore = 0



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{

    userChoice = e.target.id
    generatePcChoice()
    choiceOfPc.innerHTML = ComputerChoice
    getResults()
    scoreCounter(results)

}))


function generatePcChoice(){
    const pcChoice = Math.floor(Math.random() * possibleChoices.length) +1
    
    if (pcChoice === 1){
        ComputerChoice = 'rock'
    }
    if (pcChoice === 2){
        ComputerChoice = 'paper'
    }
    if (pcChoice === 3){
        ComputerChoice = 'scissors'
    }
}

function getResults(){


    if (ComputerChoice === userChoice){
        results = 'its a Draw !'
    }
    if (ComputerChoice === 'rock' && userChoice==='paper'){
        results = 'You Won !'
    }
    if (ComputerChoice === 'rock' && userChoice==='scissors'){
        results = 'You lost !'
    }
    if (ComputerChoice === 'paper' && userChoice==='rock'){
        results = 'You lost !'
    }
    if (ComputerChoice === 'paper' && userChoice==='scissors'){
        results = 'You Won !'
    }
    if (ComputerChoice === 'scissors' && userChoice==='paper'){
        results = 'You lost !'
    }
    if (ComputerChoice === 'scissors' && userChoice==='rock'){
        results = 'You Won !'
    }
    result.innerHTML=results

}

function scoreCounter(results){
    if (results === 'You lost !'){
        cScore++
        pcScore.innerHTML = cScore
        if(cScore === 3){
           modalBlur.style.display ='block'
           modalText.style.display = 'flex'
           modalText.style.border = '2px solid red'
           showWinnerText.innerHTML='YOU LOST !'
           showWinnerText.style.color ='red'
           resetBtn.style.background = 'red'
        }
        
     
    }
    if(results === 'You Won !'){
        uScore++
        userScore.innerHTML = uScore
        if(uScore === 3){
           modalBlur.style.display ='block'
           modalText.style.display = 'flex'
           modalText.style.border = '2px solid greenyellow'
           showWinnerText.innerHTML='YOU WON !'
           showWinnerText.style.color ='greenyellow'
           resetBtn.style.background = 'greenyellow'
        }
}}
resetBtn.addEventListener('click',()=>{
    uScore = 0
    cScore = 0
    modalBlur.style.display ='none'
    modalText.style.display = 'none'
    pcScore.innerHTML = cScore
    userScore.innerHTML = uScore
})

