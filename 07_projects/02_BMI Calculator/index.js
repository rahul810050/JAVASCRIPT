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