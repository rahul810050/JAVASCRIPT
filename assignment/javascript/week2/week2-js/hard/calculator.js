class calculator{
	constructor(){
		this.result = 0;
	}

	add(num){
		this.result += num
	}

	substract(num){
		this.result -= num
	}

	divide(num){
		if(num === 0) {
			console.log('cannot be divided by zero')
		}
		this.result /= num
	}

	multiply(num){
		this.result *= num
	}

	clear(){
		this.result = 0
	}

	getResult(){
		return this.result
	}

	calculate(expression){
		const sanitizedExpression = expression.replace(/\s+/g, '');

		if(/[^0-9+\-*/().]/.test(sanitizedExpression)){
			throw new Error('Invalid characters in expression')
		}

		try{
			this.result = eval(sanitizedExpression);
		}catch(error){
			throw new Error('invalid arithmatic expression')
		}

		return this.result
	}
}


const calc = new calculator();

calc.add(5)
console.log('result is',calc.getResult());

calc.substract(2);
console.log('result is', calc.getResult())

calc.clear();
console.log('result is', calc.getResult())

calc.add(40);
console.log('result is', calc.getResult())

calc.multiply(5);
console.log('result is', calc.getResult())

calc.divide(4);
console.log('result is', calc.getResult())

try{
	const expression = "10 + 2 * (6 - (4 + 1) / 2) + 7"

	const result = calc.calculate(expression);
	console.log('the result of the expression is', result)
} catch(error){
	console.log(error.message);
}


try{
	const expression = '5 + abc';
	const result = calc.calculate(expression)
	console.log('the result of the expression is', result)
} catch(error){
	console.log(error.message)
}