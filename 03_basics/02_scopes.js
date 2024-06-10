// var c = 300 // global variable

// global scopes variables can be accessed in local scope 

// let a = 100
// if(true){
// 	let a = 10
// 	const b = 20
// 	var c = 30
// 	console.log("inner a is: ",a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
// 	const username = "Rahul"
// 	function two(){
// 		const website = " youtube"
// 		console.log(username + website);
// 	}
	// console.log(website) // gives error bcoz it is a scope variable of function two
	// two()
// }
// one()

// if(true){
// 	const username = "rahul"
// 	if(username === "rahul"){
// 		const website = " youtube"
// 		console.log(username + website);
// 	}
// 	// console.log(website);
// }
// console.log(username);



//+++++++++++++ interesting ++++++++++++++

console.log(addOne(5)) // it will be executed though its functionn is declared after
function addOne(num){ // this is function
	return num + 1
}
console.log(addOne(5))

console.log(addTwo(5)) //it will not be executed also gives error because it is called before its initialization
const addTwo = function(num){ // this is a function but also called expression
	return num + 2
}
console.log(addTwo(5))