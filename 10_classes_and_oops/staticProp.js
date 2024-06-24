class user{
	constructor(username){
		this.username = username
	}

	logMe(){
		console.log(`Username: ${this.username}`);
	}
	static createId(){
		return `123`
	}
}

const rahul = new user('rahul')

// console.log(rahul.createId());

class Teacher extends user{
	constructor(username, email){
		super(username)
		this.email = email
	}
}

const iPhone = new Teacher('iPhone 15+', 'iPhone@gmail.com')
console.log(iPhone.createId());