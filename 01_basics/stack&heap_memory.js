// STACK MEMORY(PRIMITIVE DATATYPES)+++++++ HEAP MEMORY(NON-PRIMITIVE DATATYPES)


let myName = "Rahul"
let anotherName = myName

anotherName = "Cocane"
console.log(anotherName);
console.log(myName);   // myName value does not change becoz stack memory is allocated to these type of primitive datatypes and it only passes the copy of the value

let userOne = {
	email: "Rahul@gmail.com",
	upi: "rahul@ylb"
}

let userTwo = userOne
userTwo.email = "Cocane@gmail.com"   // if we make changes in any value it will reflect back in main variable becoz Heap memory is allocated to these type of Non-primitive datatypes and it passes the value by reference

console.log(userOne);
console.log(userTwo);