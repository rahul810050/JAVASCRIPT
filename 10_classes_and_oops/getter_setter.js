class User {
  constructor(email, pass) {
    this.email = email;
    this.password = pass;  // Use the setter to set the password
  }

	get email(){
		return this._email
	}

	set email(value){
		this._email = value
	}

  get password() {
    return this._pass.toUpperCase();
  }

  set password(pas) {
    this._pass = pas.toUpperCase();
  }
}

const user1 = new User('cocane@gmail.com', '123');
console.log(user1.password);  // Access the password using the getter
console.log(user1.email);