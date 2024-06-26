function createBankAccount(initialBalance){
	let balance = initialBalance
	return {
		Deposite(amount){
			balance += amount
			console.log(`Deposited ${amount} and Available balance ${balance}`);
		},

		Withdraw(amount){
			if(amount <= balance)
				balance  -= amount
			console.log(`Withdrew ${amount} and Available balance ${balance}`);
		},

		getBalance(){
			return balance
		}

	}
}

const bank = new createBankAccount(10000)
bank.Deposite(20000)// Deposited 20000 and Available balance 30000
bank.Withdraw(7000)// Withdrew 7000 and Available balance 23000
console.log(bank.getBalance()); // 23000