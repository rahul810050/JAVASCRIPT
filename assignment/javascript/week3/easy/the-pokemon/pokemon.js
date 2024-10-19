const div = document.createElement('div')
// const num = document.querySelector('.number').value


async function getPokemon(id){
	try{
		const pok = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		if(pok){
		const content = await pok.json();
		return content
		} else{
			return null
		}
	} catch(error){
		console.log('error fetching the pokemon', error)
		return null
	}
}

async function showPokemonCard(){
	const inputField = document.querySelector('.number')
	const num = inputField.value; // Moved inside the function
    console.log(num);
	console.log(num)
	const card = document.querySelector('.card')
	card.innerHTML = ''
	card.style.back
	// card.innerHTML = `<h1>No: ${num}</h1>`
	if(num.length > 0){

		if(/[^0-9+\-*/().]/.test(num)){
			div.innerHTML = '<h1>Please enter a valid number</h1>'
			div.style.backgroundColor = "blueviolet";
			div.style.padding = "30px";
			div.style.marginTop = "30px";
			div.style.boxShadow = "2px 2px 5px black";
			div.style.borderRadius = "10px";
			div.style.margin = "10px";
			div.style.width = "auto";
			card.appendChild(div)
			inputField.value = ''
		} else{
			const response = await getPokemon(num)
	
		if(response){
			div.innerHTML = `
			<h1>Pokemon Name: ${response.name}</h1>
			<h3>Height: ${response.height}</h3>
			<h3>Weight: ${response.weight}</h3>
			<h3>Number: ${response.id}</h3>
		`
		card.appendChild(div)
		div.style.backgroundColor = "blueviolet";
		div.style.padding = "30px";
		div.style.marginTop = "30px";
		div.style.boxShadow = "2px 2px 5px black";
		div.style.borderRadius = "10px";
		div.style.margin = "10px";
		div.style.width = "auto";
		inputField.value = ''
		} else{
			div.innerHTML = `<h1>OOPS!!! Pokemon with this no. ${num} does not exist..</h1>`
			card.appendChild(div)
			div.style.backgroundColor = "blueviolet";
			div.style.padding = "30px";
			div.style.marginTop = "30px";
			div.style.boxShadow = "2px 2px 5px black";
			div.style.borderRadius = "10px";
			div.style.margin = "10px";
			div.style.width = "auto";
			inputField.value = ''
		}
		}
	} else{
		div.innerHTML = '<h1>Please enter a valid number</h1>'
		div.style.backgroundColor = "blueviolet";
		div.style.padding = "30px";
		div.style.marginTop = "30px";
		div.style.boxShadow = "2px 2px 5px black";
		div.style.borderRadius = "10px";
		div.style.margin = "10px";
		div.style.width = "auto";
		card.appendChild(div)
		inputField.value = ''
	}

	
}
