
const myObj = {
	js: "javascript",
	cpp: "c++",
	rb: "ruby",
	swift: "swift by apple"
}

for (const key in myObj) { // object is iterable by forin loop
	console.log(`${key} :- ${myObj[key]}`);
}


// Array

const programming = ["js","rb","py","cpp"]

for (const key in programming) {
	console.log(key); // it prints the indexes of the array
	console.log(programming[key]); // it prints the value of the array
}

// forin in map

const map = new Map()
map.set(1,"INDIA")
map.set(2,"RUSSIA")
map.set(3,"USA")
map.set(4,"UKRAIN")

for(const [key, value] in map){
	console.log(`${key} :- ${value}`) // forIn does not work in Map
}

// for (const key in map) {
// 	console.log(key);// does not work 
// }