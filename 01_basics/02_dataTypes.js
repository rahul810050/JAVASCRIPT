"use strict"; // treat all JS code as newer version

// alert("hello") // we are using nodeJs not browser

// number => 2 to power 53
// BigInt
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

const id = Symbol('282')
const anotherId = Symbol('282')

// console.log(id === anotherId); // false


// object

let age = 20

let name = "Rahul"


// console.log(typeof age);
// console.log(typeof name);

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// ****************************SUMMARY OF DATATYPES*************************

// Primitive -> 7 types-> String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive) -> Array, Object, Functions

const heros = ["shaktiman","doga"]

let obj = {
	name: "Rahul",
	age: 20,
}

console.log(obj.name)
console.log(heros[0]);

const myFunction = function(){
	console.log("Hello world");
}

// console.log(typeof(heros));
// console.log(typeof(obj));
// console.log(typeof(myFunction));