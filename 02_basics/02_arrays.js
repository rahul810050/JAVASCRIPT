const marvel_heros = ["Captain America","Iron Man","Bat Man"]
const dc_heros = ["SuperMan","Flash"]

// marvel_heros.push(dc_heros)// it push dc_heros as an array itself
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros) // Concate concates two arrays
// console.log(allHeros);

const all_Heros = [...marvel_heros,...dc_heros]
// console.log(all_Heros); // Sprad Operator which spread two array...work same as like concatina

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_another_array = another_array.flat(Infinity)// Flat function Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(another_array)
// console.log(real_another_array);

// console.log(Array.from("Rahul"));  // make array from string
// console.log(Array.isArray("Cocane"));
// console.log(Array.from({name: "Rahul"}));  // we need to tell it that make array from keys or value...otherwise it will give empty array like this "[]"

// console.log(Array.from(Object.keys({ name: "Rahul", age: 25 }))); // Output: ["name", "age"]
// console.log(Array.from(Object.values({ name: "Rahul", age: 25 }))); // Output: ["Rahul", 25]
// console.log(Array.from(Object.entries({ name: "Rahul", age: 25 }))); // Output: [["name", "Rahul"], ["age", 25]]

const obj = {
	name: "Rahul",
	age: 20,
}

console.log(Array.from(Object.keys(obj)));
console.log(Array.from(Object.values(obj)))
console.log(Array.from(Object.entries(obj)))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //"of" function Returns a new array from a set of elements