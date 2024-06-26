const pi = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(pi); 
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const Biriyani = {
	shopName: 'DADA BOUDI',
	price: 233.33,
	distance: '9KM',
	orderBiriyani: function(){
		console.log('Biriyani Hazir hai sir');
	}
}

// console.log(Biriyani);
// console.log(Object.getOwnPropertyDescriptor(Biriyani,'shopName'))

Object.defineProperty(Biriyani,'shopName',{
	writable: false,
	enumerable: false // basically means not iterable 
	//enumerable: true // basically means iterable 
})
console.log(Object.getOwnPropertyDescriptor(Biriyani,'shopName'))

for (const [key,value] of Object.entries(Biriyani)) { // onject is not iterable by forof loop to make it iterable we use 'Object.entries(Biriyani)'

	if(typeof value !== 'function'){
		console.log(`${key} : ${value}`);
	}
}