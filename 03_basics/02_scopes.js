// var c = 300 // global variable

let a = 100
if(true){
	let a = 10
	const b = 20
	var c = 30
	console.log("inner a is: ",a);
}

console.log(a);
// console.log(b);
// console.log(c);