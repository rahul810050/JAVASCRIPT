// ES6

// class user{
// 	constructor(username, email, password){
// 		this.username = username
// 		this.email = email
// 		this.password = password
// 	}

// 	encryptPassword(){
// 		return `${this.password}abc`
// 	}

// 	changeUsername(){
// 		return `${this.username.toUpperCase()}`
// 	}
// }

// const userInfo = new user('cocane', 'cocane@gmail.com', 123456)
// console.log(userInfo);
// console.log(userInfo.changeUsername());
// console.log(userInfo.encryptPassword());


// behind the scene

function user(username, email, pass){
	this.username = username
	this.email = email
	this.pass = pass
}

user.prototype.encryptPassword = function(){
	return `${this.pass}`
}

user.prototype.changeUsername = function(){
	return `${this.username.toUpperCase()}`
}

const data = new user('rahul','rahul@gmail.com', 1234)

console.log(data);
console.log(data.changeUsername());
console.log(data.encryptPassword());