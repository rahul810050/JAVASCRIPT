let counter = 0

function calCounter(){
	setInterval(()=>{
		counter++;
		console.log("counter:",counter)
	}, 1000)
}

calCounter()