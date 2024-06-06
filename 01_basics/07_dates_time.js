// Dates

let myDate = new Date();
// console.log(myDate.toString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toUTCString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());

// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023,5,17,5,30,28)
let myCreatedDate = new Date("2023-06-17")
// let myCreatedDate = new Date(2023,5,17,5,30,28)

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));// to change the date from milisecond to second

let newDate = new Date()
// console.log(newDate.getMilliseconds());

console.log(newDate.toLocaleString('default',{
	weekday: "long",
	// timeZone: "AuthenticatorResponse"
}));