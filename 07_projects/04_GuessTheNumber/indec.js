let randomNum = parseInt(Math.random() * 100 + 1)

const form = document.querySelector('form')
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const startOver = document.querySelector('.resultParas')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0;

let playGame = true

if(playGame){
  submit.addEventListener("click",(e) =>{
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`please provide a valid number`)
  }
  else if(guess < 1){
    alert(`please enter a number greater than equal to 1`)
  }
  else if(guess > 100){
    alert(`please enter a number less than equal to 100`)
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over. Random number was ${randomNum}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNum){
    displayMessage(`you guessed it right`)
    endGame()
  }
  else if(guess > randomNum){
    displayMessage(`number is too high`)
    
  }
  else if(guess < randomNum){
    displayMessage(`number is too low`)
    
  }
}
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(msg){
  lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute("disabled",'')
  p.classList.add('button')
  p.innerHTML = `<h2 id= "newGame">Start a new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameBtn = document.querySelector('#newGame')
  newGameBtn.addEventListener("click",function(e){
    randomNum = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 0
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${10 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}