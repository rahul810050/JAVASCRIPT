function additionByTwo(num){
	return num + 2
}  // function is function as well as OBJECT function has all the properties that object has but some are useless

// Function --> Object --> null
// Array --> Object --> null
// String --> Object --> null

additionByTwo.power = 6

// console.log(additionByTwo(10));
// console.log(additionByTwo.power);
// console.log(additionByTwo.prototype); // By default some context is set into prototype... prototypes not only gives methods but also gives some internal properties


function createUser(username, score){
	this.username = username
	this.score = score
}

// Can i inject my functionality of mine in any function

createUser.prototype.increment = function(){
	this.score++
}

createUser.prototype.print = function(){
	console.log(`the score is: ${this.score}`);
}

const match1 = new createUser('Argentina', 12)
const match2 = new createUser('Brazil', 6)

match1.print()
match2.print()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/