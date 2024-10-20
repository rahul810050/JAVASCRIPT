
function addField(){
	const fieldType = document.querySelector('.fieldType').value

	const label = document.querySelector('.label').value
	const labelInput = document.querySelector('.label')

	// console.log(fieldType)

	const form = document.querySelector('.form')
	let newField;

	if(fieldType === 'text'){
		if(label.length > 0){
			form.innerHTML += `
			<div style="display: flex; flex-direction: column ;margin-top: 10px">
				<label style="font-weight: bold; font-size: 20px;";">${label}</label>
				
				<input style="width: 100%; margin-left: 10px;" type="${fieldType}" placeholder="Enter ${label}">
			</div>
		`
		labelInput = ''
		} else{
			alert('Please fill Field Label')
		}
	}
	if(fieldType === 'checkbox'){
		if(label.length > 0){
			form.innerHTML += `
			<div style="display: flex; align-items: center; margin-top: 10px;">
			<input style=" margin-left: 10px;" type="${fieldType}">
			<label style="font-weight: bold; font-size: 20px;";">${label}</label>
			</div>
		`
		labelInput = ''
		} else{
			alert('Please fill Field Label')
		}
	}
	if(fieldType === 'radio'){
		if(label.length > 0){
			form.innerHTML += `
			<div style="display: flex; align-items: center; margin-top: 10px">
			<input style=" margin-left: 10px;" type="${fieldType}">
			<label style="font-weight: bold; font-size: 20px;";">${label}</label>
			</div>
		`
		labelInput = ''
		} else{
			alert('Please fill Field Label')
		}
	}
}