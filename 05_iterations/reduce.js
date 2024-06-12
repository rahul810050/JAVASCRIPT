const arr = [1,2,3,4,5,6,7,8,9,10]

// const addition = arr.reduce(function(acc,currVal){
// 	return acc + currVal
// }, 0) // here "0" initializes the accumulator

const addition = arr.reduce((acc,currVal)=> acc + currVal, 0)// using arrow function
// console.log(addition);

const shoppingCart = [
	{
		itemName: "platinum ball",
		price: "1299"
	},
	{
		itemName: "diamond ball",
		price: "3999"
	},
	{
		itemName: "golden ball",
		price: "2999"
	},
	{
		itemName: "silver ball",
		price: "999"
	}
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + Number(item.price), 0)

console.log(priceToPay);