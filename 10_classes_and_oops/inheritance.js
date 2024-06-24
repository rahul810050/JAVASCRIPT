class user{
	constructor(username){
		this.username = username
	}

	logMe(){
		console.log(this.username);
	}
}

class Teacher extends user{
	constructor(username, email, pass){
		super(username)
		this.email = email
		this.pass = pass
	}

	addNew(){
		console.log(`A new teacher was added ${this.username}`);
	}
}

const data = new Teacher('rahul', 'rahul@gmail.com', 1234)
// console.log(data);
// data.addNew()

const data1 = new user()

console.log(data === data1); // false
console.log(data instanceof user); // true