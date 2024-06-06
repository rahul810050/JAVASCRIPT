const marvel_heros = ["Captain America","Iron Man","Bat Man"]
const dc_heros = ["SuperMan","Falsh"]

//marvel_heros.push(dc_heros)// it push dc_heros as an array itself
// console.log(marvel_heros);

//const allHeros = marvel_heros.concat(dc_heros) // Concate concates two arrays
// console.log(allHeros);

// const all_Heros = [...marvel_heros,...dc_heros]
// console.log(all_Heros); // Sprad Operator which spread two array...work same as like concatina

// const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
// const real_another_array = another_array.flat(Infinity)// Flat function Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(real_another_array);

// console.log(Array.from("Rahul"));  // make array from string
// console.log(Array.isArray("Cocane"));
// console.log(Array.from({name: "Rahul"}));  // we need tell it that make array from keys or value...otherwise it will give empty array like this "[]"

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //"of" function Returns a new array from a set of elements