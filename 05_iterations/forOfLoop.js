// for of loop 

const a = ["","","",""]

const b = [{},{},{}]

const arr = [1,2,3,4,5]

for (const i of arr) {
	console.log(i);
}

const str = "Rahul Naskar"
for (const i of str) {
	if(i === " ") continue
	else console.log(`each char: ${i}`);
}

const map = new Map()
map.set(1,"INDIA")
map.set(2,"RUSSIA")
map.set(3,"USA")
map.set(4,"UKRAIN")

console.log(map);

for (const [key,value] of map) {
	console.log(key,":-",value);
}

// object

const obj = {
	name: "rahul",
	age: 20
}
// console.log(obj);

// for (const [key,value] of obj) { // object is not iterable like this forof does not work
// console.log(key,":-",value);
// }