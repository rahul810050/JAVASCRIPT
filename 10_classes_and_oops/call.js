function setUserName(username){
	this.username = this.username
	console.log('called');
}

function createUser(username, email, password){
	setUserName.call(this, username) // call used to hold the reference of the "setUserName" function
	// The this keyword refers to the context in which the function setUserName is called. By using call, you explicitly set the context for this inside setUserName.
	this.email = email
	this.password = password
}

const user = new createUser('cocane','cocane@gmail.com', 123)

console.log(user);