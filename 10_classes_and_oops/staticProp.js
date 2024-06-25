class user{
	constructor(username){
		this.username = username
	}

	logMe(){
		console.log(`Username: ${this.username}`);
	}
	static createId(){ // you access static methods by calling them directly on the class, not on an instance of the class. This allows you to use utility functions that are related to the class but do not require access to any instance-specific data.
		return `123`
	}
}

const rahul = new user('rahul')
const stat = user.createId() // you access static methods by calling them directly on the class
console.log(stat);
// console.log(rahul.createId());

class Teacher extends user{
	constructor(username, email){
		super(username)
		this.email = email
	}
}

const iPhone = new Teacher('iPhone 15+', 'iPhone@gmail.com')
// console.log(iPhone.createId());