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