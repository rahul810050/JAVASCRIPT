function calculateTime(n) {
	const startTime = Date.now();
	
	let sum = 0;
	for (let i = 1; i <= n; i++) {
			sum += i;
	}

	const endTime = Date.now();
	
	const timeInSeconds = (endTime - startTime) / 1000;
	
	return timeInSeconds;
}


console.log(calculateTime(10000))
console.log(calculateTime(100000000))
console.log(calculateTime(10000000000))