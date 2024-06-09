// functions

// function sayMyName(){
// 	console.log("R");
// 	console.log("A");
// 	console.log("H");
// 	console.log("U");
// 	console.log("L");
// }

// sayMyName();

function addition(num1,num2){
	// let result = num1 + num2;
	// return result
	return num1 + num2
	console.log("Rahul"); // Unreachable code...after return no code will be eexecuted
}

// let result = addition(4,6)
// console.log(result);

function loginUserMessage(username = "Cocane"){
	if(!username){  // it will check that username  is undefined or not
	// if(username === undefined) or	
		console.log("Please enter a valid username");
		return
	}
	return `${username} just logged in`
}
// console.log(loginUserMessage()); // if we dont pass anything in the argument it will simply use the cocane username

// console.log(loginUserMessage()); // if we dont pass the argument in the function then it will be treated as undefined

console.log(loginUserMessage("Rahul"));  // the cocane username will simply be overwritten 