// const tinderUser = new Object()// this is a singleton object

const tinderUser = {} // this is a non-singleton object
tinderUser.id = "xyz1234"
tinderUser.name = "Rahul"
tinderUser.age = 20

// console.log(Object.keys(tinderUser)); // Returns the names of the enumerable string properties and methods of an object.

// console.log(Object.values(tinderUser)); // Returns an array of values of the enumerable properties of an object

// console.log(Object.entries(tinderUser)); // Returns an array of key/values of the enumerable properties of an object

// console.log(tinderUser);

// const obj = {
// 	email: "Rahul@gmail.com",
// 	fullname: {
// 		userName: {
// 			firstName: "Rahul",
// 			lastName: "Naskar"
// 		}
// 	}
// }

// console.log(obj.fullname?.userName.firstName);  // "?" checks that the fullname actually exist or not

const obj1 = {1: "a",2: "b",3: "c"}
const obj2 = {1: "d",2: "e",3: "f"}

// const obj3 = Object.assign({},obj1,obj2)// Assign function Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

const obj3 = {...obj1,...obj2} // we can also use spread operator to merge two or more objects
// console.log(obj3);


// const obj = [
// 	{
// 		id : 6465876,
// 		email: "Rahul@gmail.com"
// 	},
// 	{

// 	},
// 	{

// 	}
// ]



const course = {
	courseName: "JavaScript",
	price: "10000",
	courseInstructor: "Rahul"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // it is called destructure of JS
// console.log(courseInstructor);
console.log(instructor);