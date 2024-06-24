const name1 = 'Rahul   '

// console.log(name1.length);
// console.log(name1.trim().length);

let myHero = ['thor','spiderman']

let heroPower = {
	thor: 'hammer',
	spiderman: 'sling',

	getThorPower: function(){
		console.log(`thor power is: ${this.thor}`);
	}
}

Object.prototype.rahul = function(){
	console.log(`rahul is present in all object`);
}
// heroPower.rahul()
// myHero.rahul()

Array.prototype.heyRahul = function(){
	console.log(`hello Rahul`);
}
myHero.heyRahul() // it will work because "heyRahul" prototype is defined in Array but not in Object  
// heroPower.heyRahul() // it will not work because "heyRahul" prototype is defined in Array but not in Object


// Inheritance

const user = {
	name: 'cocane',
	email: 'cocane@gmail.com'
}
const Teacher = {
	makeVDO: true
}
const TeachingSupport = {
	isAvailable: false
}
const TASupport = {
	makeAssignment: 'JS assignment',
	fullTime: true,
	__proto__: TeachingSupport
}

Teacher.__proto__ = user // to use properties of other objects defining syntax

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher) // TeacherSupport can access all the properties of Teacher



let anotherName = 'LionelMessi    '

String.prototype.trueLength = function(){ // defining a String prototype 
	console.log(`${this}`);
	console.log(`true length is: ${this.trim().length}`);
}
anotherName.trueLength()
'rahul  '.trueLength()
'cocane  '.trueLength()