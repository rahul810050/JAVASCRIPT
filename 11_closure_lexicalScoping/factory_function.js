function createGreeter(greeting) {
	return function(name) {
			console.log(`${greeting}, ${name}!`);
	};
}

const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');

sayHello('Alice'); // Output: Hello, Alice!
sayHello('Bob');   // Output: Hello, Bob!

sayHi('Charlie');  // Output: Hi, Charlie!
sayHi('Dave');     // Output: Hi, Dave!
