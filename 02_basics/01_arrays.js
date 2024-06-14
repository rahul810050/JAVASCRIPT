// Arrays

const myArr = [1,2,3,4,5,6] // defining an array

//const arr = new Array(1,2,3,4)// another way to define an array

// console.log(myArr[3]);

// Arrays-> Methods

// myArr.push(10);
// myArr.push(20);
// myArr.push(9);
// myArr.pop();  // it just delete the  last element of the array

myArr.unshift(37)  // it just adds the value into the first position of array
myArr.shift()  // it just removes the first element of the array
myArr.includes(5) // it checks that, "5" is in the array or not if yes then True else False
//console.log(myArr.indexOf(4)); // it just returns thhe index of the value if it is in the array or give "-1"

const newArr = myArr.join()  // convert the whole array into string

// console.log(myArr);
// console.log(typeof newArr); // string

console.log("A",myArr);

const newArr1 = myArr.slice(1,4); // it returns values from 1 index to 4-1 
console.log(newArr1);

console.log("B",myArr);

const newArr2 = myArr.splice(1,4); // it returns values from 1 index to 4 index and it not only return but also delete the element from the array
console.log(newArr2);
console.log("C",myArr);