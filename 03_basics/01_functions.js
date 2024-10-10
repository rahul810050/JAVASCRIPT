// functions

function sayMyName(){
	console.log("R");
	console.log("A");
	console.log("H");
	console.log("U");
	console.log("L");
}

// sayMyName();

function addition(num1,num2){
	// let result = num1 + num2;
	// return result
	return num1 + num2
	console.log("Rahul"); // Unreachable code...after return no code will be eexecuted
}

let result = addition(4,6)
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

// console.log(loginUserMessage("Rahul"));  // the cocane username will simply be overwritten 


function calculateCartPrice(...num1){  // "..." this is rest operator it gives an array of all the arguments passed in the call of function no matter how many value we pass in the argument
	return num1
}

// console.log(calculateCartPrice(200,300,400,500,600))

// when we pass an object in a function

const user = {
	username: "Rahul",
	price: 999,
	Batch: "Web Development",
}

function handleObject(anyObject){
	console.log(`Username is: ${anyObject.username} and Price is: ${anyObject.price} and he enrolled in Batch ${anyObject.Batch}`);
}
handleObject(user)
handleObject({
	username: "Rahul",
	price: 999,
	Batch: "competitive programming",
}) // we can also pass direct object

// when we pass an array in a function

const myNewArray = [100,200,300,400,500]

function handleArray(getArray){
	return getArray[3]
}
console.log(handleArray(myNewArray))
console.log(handleArray([100,200,300,400,500])); // we can also pass direct array