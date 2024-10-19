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


// const promise = new Promise(function(resolve, reject	){
// 	setTimeout(function(){
// 		console.log("Promise worked")
// 		resolve()
// 	}, 1000)
// })

// promise.then(function(){
// 	console.log("promise is consumed")
// })	


// new Promise(function(resolve, reject){
// 	setTimeout(function(){
// 		resolve({username: "Rahul", email: "rahul@gmail.com"})
// 	}, 1000)
// }).then(function(user){	
// 	console.log(user)
// })


// new Promise(function(resolve, reject){
// 	setTimeout(function(){
// 		let error = false
// 		if(!error){
// 			resolve({username: "Rahul", password: "874365"})
// 		}else{
// 			reject("opps : something went wrong")
// 		}
// 	})
// }).then(function(user){
// 	console.log(user)
// 	return user.username
// }).then(function(username){
// 	console.log(username);
// }).catch((error)=>{
// 	console.log(error)
// })

/*
const prom = new Promise(function(resolve, reject){
	setTimeout(function(){
		let error = false;
		if(!error) resolve({username: "Rahul", pass: "987234"})
			else reject('error found');
	}, 1000)
})

async function func(){
	try{
		const response = await prom
		console.log(response)
	} catch(error){
		console.log(error)
	}
}

func()
*/


// async function fetching(){
// 	try {
// 	const response = await fetch('https://api.github.com/users')
// 	const data = await response.json()
// 	console.log(data)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// fetching()



// fetch('https://api.github.com/users')
// .then(function(response){
// 	return response.json()
// })
// .then(function(data){
// 	console.log(data);
// })
// .catch((error)=>{
// 	console.log(error)
// })


// const fs = require('fs')

// const content = fs.readFileSync('a.txt', 'utf-8')

// console.log(content)


// function func(error, val){
// 	console.log(val)
// }

// const fs = require('fs')

// fs.readFile('a.txt', 'utf-8', func) // asynchornous

// fs.readFile('b.txt', 'utf-8', func) // asynchrornous

// console.log('done')


// function func(){
// 	console.log('click the button')
// }

// console.log('hi')

// setTimeout(func, 1000)

// console.log('welcome to loope')

// let c = 0;
// for(let i = 0; i < 10; i++)  console.log(c++);

// console.log('very expensive operation happened')


// function func(){
// 	fetch('https://api.github.com/users')
// 	.then(function(user){
// 		const response = user.json();
// 		// console.log(user)
// 		return response
// 	})
// 	.then(function(user){
// 		console.log(user);
// 	})
// 	.catch((error)=> console.log(error));
// }

// new Promise(function(resolve, reject){
	
// 	setTimeout(function(){
// 		resolve()
// 		func()
// 	}, 5000);
// })

// const fs = require('fs')

// const content = fs.readFile('a.txt', 'utf-8', function(error, value){
// 	console.log(value)
// })


// function setTimefunc(timeout){
// 	let startTime = new Date()
// 	while(true){
// 		let currTime = new Date()
// 		if(currTime.getTime() - startTime.getTime() > timeout) break
// 	}
// }

// setTimefunc(2000)

// console.log('hey boy')


// class Rectangle{
// 	constructor(width, height, color){
// 		this.width = width
// 		this.height = height
// 		this.color = color
// 	}

// 	area(){
// 		return this.width * this.height
// 	}

// 	paint(){
// 		console.log('painting of the rectangle is:', this.color)
// 	}
// }

// const rect = new Rectangle(2,4, "green")

// const area = rect.area();
// console.log(area)
// rect.paint();


// const map = new Map()

// map.set('name', 'Rahul')
// map.set('age', 20);

// console.log(map.get('name'))


// a promise is an object of an eventual completion or failure of an asynchronous operation and its resulting value


// new Promise(function(r,re){
// 	setTimeout(function(){
// 		console.log('hello')
// 		let error = false
// 		if(!error) r({username: 'Rahul', age: 20});
// 		else re('found an error', error)
// 	},4000)
// }).then(function(user){
// 		return user.username;
// }).then(function(username){
// 	console.log(username)
// }).catch((error)=>{
// 	console.log(error)
// })

// const fs = require('fs')

// new Promise(function(resolve, reject){
// 	setTimeout(function(){
// 		fs.readFile('a.txt', 'utf-8', (err, content)=>{
// 			if(err) reject(err)
// 			else resolve(content)
// 		})
		
// 	}, 4000)
// }).then(function(cont){
// 	console.log(cont);
// }).catch((error)=>{
// 	console.log(error)
// })


// function func(r){

// }

// const pro = new Promise(func())

// pro.then()

// const fs = require('fs')


// new Promise(function(resolve, reject){
// 	setTimeout(function(){
// 		const read = fs.readFile('a.txt', 'utf-8', (err, val)=>{
// 			if(err) reject(err)
// 		})
// 		fs.writeFile('a.txt', "hey how are you??",(err)=>{
// 			if(err) reject(err);
// 		});
// 		fs.truncate('a.txt', 0, (err)=> {
// 			if(err) reject(err)
// 		})
// 		resolve('file is cleared and updated successfully')
// 	}, 2000);
// }).then(function(message){	
// 	console.log(message)
// }).catch((error)=> console.log(error));


const fs = require('fs')

// const constent = fs.readFile('a.txt', 'utf-8', func)

// function func (err, val){
// 	console.log(val)
// }

// let x = 0;
// for(let i = 0; i<20; i++) x++;
// // console.log(constent);




// const  s =async ()=>{
// 	const content = await fs.readFile('a.txt', 'utf-8',function(err,val){
// 		console.log(val)
// 	})
// }

// s()



// const content = fs.writeFile('a.txt','anything is possible if you work hard endlessly and truly stay relentless', function(err){
// 	if(err) console.log('error aa gya bhai');
// })


// console.log('file has been written successfully');



// function wait(n){
// 	setTimeout(() => {
		
// 	}, n);
// }


// new Promise(function(resolve, reject){
// 	let ms = 5000;
// 	function wait(n){
// 		setTimeout(()=>{
// 			resolve();
// 			console.log('resolve got called')
// 		}, n)
// 	}

// 	wait(ms)
// })
// .then(function(user){
// 	console.log('resolve called then function')
// })
// .catch((error)=>{
// 	console.log(error)
// })




// function sleep(ms){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(()=>{
// 			resolve(ms)
// 		}, ms)
// 	})
// }

// sleep(5000)
// .then((e)=> {
// 	console.log('promise is called after',e,'sec')
// }).catch((error)=>{
// 	console.log(error)
// })



// function wait1(ms){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(()=>{
// 			resolve(ms);
// 		})
// 	})
// }
// function wait2(ms){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(()=>{
// 			resolve(ms);
// 		})
// 	})
// }
// function wait3(ms){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(()=>{
// 			resolve(ms);
// 		})
// 	})
// }


// function func(t1,t2,t3){
// 	return Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
// }


// func(2000,4000,8000)
// .then((times)=>{
// 	const totalTime = times.reduce((acc, curr)=> acc + curr, 0);
// 	console.log('total time of all the promises is:', totalTime)
// })
// .catch((error)=>{
// 	console.log(error)
// })

// module.exports = func



const hex = '0123456789ABCDEF'
			let color = '#'

			for(let i = 0; i < 6; i++){
				const rand = hex[Math.floor(Math.random() * 16 )]
				color += rand
			}
			console.log(color)