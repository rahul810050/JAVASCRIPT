// // fetch('https://something.com').then().catch().finally()

// const promisesOne = new Promise(function(resolve,reject){
// 	// do an async task
// 	// DB call , cryptography, network call
// 	setTimeout(function(){
// 		console.log('Async task is completed');
// 		resolve() // we need to call the resolve function
// 	})
// }, 1000)

// promisesOne.then(function(){
// 	console.log('promise is consumed');
// })


// new Promise(function(resolve, reject){
// 	setTimeout(function(){
//  console.log('async 2');
//  resolve()
// 	}, 1000)
// }).then(function(){     
// 	console.log('async 2 consumed');
// })


// const promiseThree = new Promise(function(resolve, reject){
// 	setTimeout(function(){
// 		resolve({username: 'cocane', email: 'cocane@gmail.com'}) // passing object in resolve
// 	})
// }).then(function(user){
// 	console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
// 	setTimeout(function(){
// 		let error = false
// 		if(!error){
// 			resolve({userName: 'cocane', email: 'cocane@gmail.com'})
// 		}
// 		else{
// 			reject('ERROR: something went wrong')
// 		}
// 	})
// })
// promiseFour
// .then((user)=>{
// 	console.log(user);
// 	return user.userName
// })
// .then((us)=>{
// 	console.log(us);
// })
// .catch(function(error){
// 	console.log(error);
// })
// .finally(()=> console.log('the promise is finally resolved'))



// const promiseFive = new Promise(function(resolve, reject){
// 	setTimeout(() => {
// 		let error = false
// 		if(!error) resolve({username: "JavaScript", email: "js@gmail.com"})
// 			else reject('ERROR: something went wrong')
// 	}, 1000);
// });

// // async -> another way to do dot then dot catch dot finally is 

// async function consumedAsync(){
// 	try {
// 		const response = await promiseFive
// 		console.log(response);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// consumedAsync()

// async function getAllData(){
// 	try{
// 		const response = await fetch('https://randomuser.me/api/')
// 		// console.log(response);
// 		const data = await response.json() // to convert it into json it takes some time that's why await is written in front of the method
// 		console.log(data);
// 	} catch(error){
// 		console.log('Error: ',error);
// 	}
// }
// getAllData()

// // using dot then

// fetch('https://api.github.com/users')
// .then((response)=>{
// 	return response.json()
// })
// .then((data)=>{
// 	console.log(data);
// })
// .catch((error)=>{
// 	console.log(error);
// })



// 1st approach

// setTimeout(function(){
// 	console.log('hi')
// 	setTimeout(function(){
// 		console.log('hello')
// 		setTimeout(() => {
// 			console.log('hello there')
// 		}, 5000);
// 	}, 3000)
// }, 1000)


// 2nd approach

function setTimeoutPromisified(duration){
	return new Promise(function(resolve){
		setTimeout(resolve, duration);
	})
}


// setTimeoutPromisified(1000).then(()=>{
// 	console.log('hi')
// 	setTimeoutPromisified(3000).then(()=>{
// 		console.log('hello')
// 		setTimeoutPromisified(5000).then(()=> {
// 			console.log('hello there');
// 		})
// 	})
// })


// setTimeoutPromisified(1000).then(()=>{
// 	console.log('hi')
// 	return setTimeoutPromisified(3000);
// }).then(()=>{
// 	console.log('hello')
// 	return setTimeoutPromisified(5000)
// }).then(()=>{
// 	console.log('hello there')
// }).catch((error)=>{
// 	console.log('error aa gya bhai', error)
// })

async function solve(){
	await setTimeoutPromisified(1000)
	console.log('hi')
	await setTimeoutPromisified(3000)
	console.log('hello')
	await setTimeoutPromisified(5000)
	console.log('hello there')
}

solve()

console.log('this gets printed first')