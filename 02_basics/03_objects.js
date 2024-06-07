// singleton is made when object is created with constructor 
// Object.create
// object literals-> way to declare the object

const mySym = Symbol("key1")

const JsUser = {
	name: "Rahul",
	"full name": "Rahul Naskar",
	age: 20,
	[mySym]: "key", // that's how the Symbol should be declared in an object
	location: "Kolkata",
	email: "Rahul@google.com",
	isLoggedIn: false,
	lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email); // one way to access the keys from object
// console.log(JsUser["email"]); // another way to access the keys and values of object
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // that's how the Symbol can be accessed

// JsUser.name = "Cocane"
// Object.freeze(JsUser) // Prevents the modification of existing property attributes and values, and prevents the addition of new properties

// JsUser.name = "Naksar"
// console.log(JsUser);

JsUser.greeting = function(){
	console.log("Hello Heaven");
}
JsUser.greetingTwo = function(){
	console.log(`Hello Heaven ${this["full name"]}`);
}

// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());