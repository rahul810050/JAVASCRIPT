const myNums = [1,2,3,4,5,6,7,8]

// const newNums = myNums.filter((num)=> num > 4) 
// const newNums = myNums.filter((num)=> {
// 	 return num > 4
// 	}) // if we cover the condition with curly bracess then we have to write return statement
// console.log(newNums);


const newNum = [];

myNums.forEach((num)=>{
	if(num > 4){
		newNum.push(num);
	}
})

// console.log(newNum);

const books = [
	{ title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
	{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
	{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
	{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
	{ title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
	{ title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
	{ title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
	{ title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
	{ title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBook = books.filter((bk)=> bk.genre === 'Fiction') // we have to put the condition
const userBook = books.filter((bk) => {
	return (bk.publish >= 1995) && (bk.genre === 'fiction');
});
// console.log(userBook);