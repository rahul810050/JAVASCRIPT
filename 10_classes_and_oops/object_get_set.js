const obj = {
	_email: 'r@google.com',
	_password: 'abxkjhds',


	get email(){
		return this._email.toLocaleUpperCase()
	},
	
	set email(value){
		this._email = value
	}
}

const user = Object.create(obj)
console.log(user.email);