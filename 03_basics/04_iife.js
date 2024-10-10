// Immediately Invoked Function Expression (IIFE)

(function func(){ // named iife
	console.log(`DB CONNECTED`);
}) (); // iife function does not know where to end that's why we need to add the semicolon at end of function

( () => { // unnamed iife
	console.log("DB CONNECTED Immediately");
})();

// why iife fucntion is used??
// Ans:- iife function is a function which get executed immediately to solve the problem of global scope polutions

// (function definition) (function execution)


( (name) => { // unnamed iife
	console.log(`DB CONNECTED Immediately ${name}`);
})("Rahul");