const name = "Rahul"
const age = 20

// console.log(`hello my name is ${name} and I am ${age} year old`);


// console.log(name.__proto__);
// console.log(name.length);
// console.log(name.toUpperCase());

const gameName = new String('eFootball')

// console.log(gameName[0]);
console.log(gameName.__proto__);
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('o'));
console.log(gameName.slice(0,3));

const newGame = "   Basketball    "


console.log(newGame.trim());
console.log(newGame.replace('ll','ii'));