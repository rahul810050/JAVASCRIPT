const user = {
	fullname: "Rahul Naskar",
	age: 20,
	gender: "Male",
}

function greet(user){
	console.log("Hi",user.gender === "Male" ? "Mr.": "Mrs/Miss", user.fullname, "You are", user.age, "year old");
	
}

// greet(user);


const users = [{
	fullname: "Rahul",
	age: 20,
},
{
	fullname: "Cocane",
	age: 22,
},
{
	fullname: "Sri",
	age: 17
}
]

// function assignment(users){
// 	for(let i = 0; i < users.length; i++){
// 		if(users[i].age > 18){
// 			console.log(users[i].fullname, ", You are an adult");
// 		} else{
// 			console.log(users[i].fullname, ", You are a minor");
// 		}
// 	}
// }

// users.filter(user => user.age > 18).forEach((user)=>{
// 	console.log(user.fullname , ", you are an adult");
// })

// users.filter(user => user.age < 18).forEach((user)=> {
// 	console.log(user.fullname, ", you are a minor");
// })

// users.forEach((user)=>{
// 	console.log(user.fullname, (user.age > 18 ? ", you are an adult": ", you are a minor"));
// })

// assignment(users)


// const a = require("fs")

// const contents = a.readFileSync("a.txt", "utf-8");

// console.log(contents);


