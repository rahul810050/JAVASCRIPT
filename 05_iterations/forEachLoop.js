const language = ["py","c++","js","java"]

// language.forEach(function(item){
// 	console.log(item);
// });

// language.forEach((item) =>{
// 	console.log(item);
// })

// language.forEach((item,index,arr) =>{
// 	console.log(item,index,arr);
// })

const myCoding = [
	{
		langName: "javascript",
		langFileName: "js"
	},
	{
		langName: "java",
		langFileName: "java"
	},
	{
		langName: "python",
		langFileName: "py"
	}
]

// myCoding.forEach((item)=>{
// 	console.log(item.langName);
// })
const value = myCoding.forEach((item)=>{
	// console.log(item.langName);
	return item.langName // foreach loop return nothing 
})
// console.log(value); // undefined
