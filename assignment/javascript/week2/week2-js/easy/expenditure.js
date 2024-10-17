function calculateTotalSpentByGrocery(transactions){
	let arr = new Array();

	transactions.forEach((spent)=>{
		arr.push({category: spent.catagory, price : spent.price })
	})

	return arr;
}


const transactions = [
	{ category: 'Food', itemname: 'Pizza', price: 200 },
	{ category: 'Dress', itemname: 'Hoodie', price: 1000 },
	{ category: 'Vegetables', itemname: 'Potato', price: 50 },
	{ category: 'Food', itemname: 'Burger', price: 150 },
	{ category: 'Electronics', itemname: 'Headphones', price: 2000 },
	{ category: 'Dress', itemname: 'Jacket', price: 1500 },
	{ category: 'Vegetables', itemname: 'Carrot', price: 70 },
	{ category: 'Food', itemname: 'Sandwich', price: 120 },
];

const chart = calculateTotalSpentByGrocery(transactions)

console.log(chart)