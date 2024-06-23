const user = {
	username: 'cocane',
	loginCount: 9,
	grtUserDetails: function(){
		console.log('got users detailsfrom DataBase');
		console.log(`username: ${this.username}`);
	}
}
console.log(user.username);
console.log(user.grtUserDetails());                              

function userData(username, loginCount, isLoggedIn){
	this.username = username;
	this.loginCount = loginCount;
	this.isLoggedIn = isLoggedIn;
	// return this
}

const userOne = new userData('rahul', 10, true)
const userTwo = new userData('cocane', 6, false) 
console.log(userOne);
console.log(userTwo);

// what "new" keyword does??
// 1.firstly it creates a new emoty object
// 2. constructor function is called
// 3. arguments are injected into object