# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((btn)=>{
	btn.addEventListener("click",function(e){
		if(e.target.id === "gold") body.style.backgroundColor = e.target.id // we can also write the color itself instead of e.target.id
		if(e.target.id === "teal") body.style.backgroundColor = e.target.id
		if(e.target.id === "olive") body.style.backgroundColor = e.target.id
		if(e.target.id === "coral") body.style.backgroundColor = e.target.id
	})
})
```

## project 2

```javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
 e.preventDefault()
 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const result = document.querySelector('#results')

	if(height === '' || height < 0 || isNaN(height)){
		result.innerHTML = `Please provide a valid height`
	}
	if(weight === '' || weight < 0 || isNaN(weight)){
		result.innerHTML = `Please provide a valid weight`
	}
	else{
		
		const heightInMeter = height / 100
		const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2)
		result.innerHTML = `your BMI is: ${bmi}`
		let category = ''
		if(bmi < 18.6) category = 'Under weight'
		else if(bmi >= 18.6 && bmi <= 24.9) category = 'Normal Range'
		else if(bmi > 24.9) category = 'Overweight'

		result.innerHTML = `<span>you are ${category}</span>`
	}

})
```

## project 3

```javascript
const clock = document.querySelector('#clock');

setInterval(function(){
  const time = new Date();
  clock.innerHTML = time.toLocaleTimeString()
  // console.log(time.toLocaleTimeString())
}, 1000);

```

## project 4

```javascript
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
```

## project 5

```javascript
window.addEventListener('keydown', function (e) {
  document.querySelector('#insert').innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `;
	// ${e.key === ' ' ? 'space' : e.key} this is to check space key when it pressed then the e.key gives empty
});

```

## project 6

```javascript
function getRandomColor(){
  const letter = '0123456789ABCDEF'
  let color = '#'
  
  for(let i = 0; i < 6; i++){
    const randomColor = letter[Math.floor(Math.random() * 16)]
    color += randomColor
  }
  return color
}

// console.log(getRandomColor);

let interval;

document.querySelector('#start').addEventListener('click',function(e){
  if(!interval){ // better optimized code
  interval = setInterval(function(){
    const ranndom = getRandomColor()
    document.querySelector('body').style.backgroundColor = ranndom
  }, 2000)
}
})


document.querySelector('#stop').addEventListener('click',function(e){
  clearInterval(interval)
  interval = null // for better optimized code
})
```