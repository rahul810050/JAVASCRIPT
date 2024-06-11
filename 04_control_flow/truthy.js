const userEmail = "rahul@gmail.com"

if(userEmail) console.log("got user email");
else console.log("dont have any email??");

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}



// how to check empty array in if statement
const arr = []
// if(arr.length === 0) console.log("Array is empty");


// how to check empty object in if statement
const obj = {}
// if(Object.keys(obj).length === 0) console.log("object is empty");

// Nullish Coalescing operator (??): null undefined
// By using the nullish coalescing operator, you will only replace exactly null and undefined values with the right-hand value. The nullish coalescing operator can be used with any type of value, including numbers, strings, and objects
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20 // 10

// console.log(val1);

// Ternary Operator
// condition ? true : false

const iceCream = 100
iceCream <= 50 ? console.log("less than 50"): console.log("more than 50");