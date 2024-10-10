const user = {
	username: "rahul",
	price: 999,
	welcomeMessage: function (){
		console.log(`username is: ${this.username} and the price is: ${this.price}`); // this keyword gives the current context if we put "this" keyword in front of any variable
		console.log(this); // if we write "this" it will give all the current context
	}
}
user.welcomeMessage()
user.username = "Cocane"
user.welcomeMessage()

console.log(this); // gives empty "{}"

// function funct(){
// 	let username = "rahul"
// 	console.log(this.username); // undefined--- actually "this" keyword does not work int function
// 	console.log(this)
// }
// funct()

const funcker = function(){
	let username = "rahul"
	console.log(this.username); // undefined
}
funcker()

// arrow function

const func = ()=> {
	let username = "rahul"
	console.log(this.username); // undefined
}
func()

// const addTwo = (num1,num2) => {
// 	return num1 + num2
// }
const addTwo = (num1,num2) =>  num1 + num2  // this is IMPLICIT RETURN coz it is one line statement
const addTwo2 = (num1,num2) =>  (num1 + num2 ) // we can also wrap it like this if we use parenthesis then we dont need to write "return" but if we use curly bracess then we need to write "return" statement
const addTwo3 = (num1,num2) =>  ({username: "rahul"}) // when we want to return any object the syntax would be like this

// console.log(addTwo(8,9))