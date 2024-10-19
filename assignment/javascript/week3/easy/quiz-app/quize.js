const data = [
	{
			"question": "Which language runs in a web browser?",
			"a": "Java",
			"b": "C",
			"c": "Python",
			"d": "JavaScript",
			"correct": "d",
	},
	{
			"question": "What does CSS stand for?",
			"a": "Central Style Sheets",
			"b": "Cascading Style Sheets",
			"c": "Cascading Simple Sheets",
			"d": "Cars SUVs Sailboats",
			"correct": "b",
	},
	{
		"question": "What does HTML stand for?",
		"a": "Hypertext Markup Language",
		"b": "Hypertext Markdown Language",
		"c": "Hyperloop Machine Language",
		"d": "Helicopters Terminals Motorboats Lamborginis",
		"correct": "a",
},
{
		"question": "What year was JavaScript launched?",
		"a": "1996",
		"b": "1995",
		"c": "1994",
		"d": "none of the above",
		"correct": "b",
},
{
		"question": "Who created JavaScript?",
		"a": "Douglas Crockford",
		"b": "Sheryl Sandberg",
		"c": "Brendan Eich",
		"d": "Tim Berners-Lee",
		"correct": "c",
},
{
		"question": "Which of the following is a JavaScript framework?",
		"a": "Laravel",
		"b": "React",
		"c": "Django",
		"d": "Ruby on Rails",
		"correct": "b",
},
{
		"question": "What does 'DOM' stand for in JavaScript?",
		"a": "Document Object Model",
		"b": "Data Object Management",
		"c": "Digital Object Model",
		"d": "Desktop Object Mapping",
		"correct": "a",
},
{
		"question": "Which company developed JavaScript?",
		"a": "Microsoft",
		"b": "Netscape",
		"c": "Google",
		"d": "Mozilla",
		"correct": "b",
},
{
		"question": "What does '===' mean in JavaScript?",
		"a": "Assignment",
		"b": "Comparison",
		"c": "Strict equality comparison",
		"d": "Logical AND",
		"correct": "c",
},
{
		"question": "Which of the following is not a JavaScript data type?",
		"a": "String",
		"b": "Boolean",
		"c": "Integer",
		"d": "Undefined",
		"correct": "c",
},
{
		"question": "What is 'NaN' in JavaScript?",
		"a": "A number",
		"b": "An error",
		"c": "Not a Number",
		"d": "None of the above",
		"correct": "c",
},
{
		"question": "How do you declare a JavaScript variable?",
		"a": "let x;",
		"b": "var x;",
		"c": "x = 10;",
		"d": "All of the above",
		"correct": "d",
},
{
		"question": "Which method is used to convert JSON data to a JavaScript object?",
		"a": "JSON.parse()",
		"b": "JSON.stringify()",
		"c": "JSON.convert()",
		"d": "JSON.objectify()",
		"correct": "a",
},
{
		"question": "What keyword is used to define an asynchronous function in JavaScript?",
		"a": "async",
		"b": "await",
		"c": "promise",
		"d": "callback",
		"correct": "a",
},
{
		"question": "Which symbol is used for comments in JavaScript?",
		"a": "//",
		"b": "/* */",
		"c": "<!-- -->",
		"d": "Both a and b",
		"correct": "d",
},
{
		"question": "What is the result of `typeof null` in JavaScript?",
		"a": "null",
		"b": "object",
		"c": "undefined",
		"d": "function",
		"correct": "b",
},
{
		"question": "What is the correct way to write a JavaScript array?",
		"a": "var colors = (1:'red', 2:'green', 3:'blue')",
		"b": "var colors = ['red', 'green', 'blue']",
		"c": "var colors = 'red', 'green', 'blue'",
		"d": "var colors = {1:'red', 2:'green', 3:'blue'}",
		"correct": "b",
},
{
		"question": "How do you write 'Hello World' in an alert box?",
		"a": "msg('Hello World')",
		"b": "alert('Hello World')",
		"c": "alertBox('Hello World')",
		"d": "msgBox('Hello World')",
		"correct": "b",
},
{
		"question": "Which method adds one or more elements to the end of an array and returns the new length?",
		"a": "push()",
		"b": "pop()",
		"c": "shift()",
		"d": "unshift()",
		"correct": "a",
},
{
		"question": "Which of the following is used to iterate over an array in JavaScript?",
		"a": "for loop",
		"b": "forEach()",
		"c": "map()",
		"d": "All of the above",
		"correct": "d",
},
{
		"question": "Which operator is used to assign a value to a variable in JavaScript?",
		"a": "=",
		"b": "==",
		"c": "===",
		"d": "!=",
		"correct": "a",
},
{
		"question": "Which method is used to round a number to the nearest integer in JavaScript?",
		"a": "Math.ceil()",
		"b": "Math.round()",
		"c": "Math.floor()",
		"d": "Math.random()",
		"correct": "b",
},
{
		"question": "Which built-in function is used to convert a string to lowercase letters?",
		"a": "toLowerCase()",
		"b": "toLower()",
		"c": "lower()",
		"d": "changeCase(lower)",
		"correct": "a",
},
{
		"question": "What will the code `Boolean(0)` return?",
		"a": "true",
		"b": "false",
		"c": "0",
		"d": "undefined",
		"correct": "b",
},
{
		"question": "Which event occurs when the user clicks on an HTML element?",
		"a": "onmouseover",
		"b": "onchange",
		"c": "onmouseclick",
		"d": "onclick",
		"correct": "d",
}
];









const totalQues = data.length
let correctAns = 0;
let numberOfQues = 0;
let totalTime = 10;
let arrOfQues = []
let index = 0;
let interval;
let timeLeft = totalTime * 60;

let minutes = document.querySelector('.pTime')
minutes.innerHTML = `Time: ${totalTime} min`


function startQuize(){
	removeStartBtn()
	remainingTime()
	generateQues()

}

function generateQues(){
	const ques = document.querySelector('.ques')
	ques.innerHTML = ''
	const div = document.createElement('div')
	if(index < totalQues){
		const question = data[index];
		div.innerHTML = `
            <div>
                <h3 style="text-align: left;">Question ${index + 1}: ${question.question}</h3>
                <p style="text-align: left;"><input type="radio" name="answer" value="a"> ${question.a}</p>
                <p style="text-align: left;"><input type="radio" name="answer" value="b"> ${question.b}</p>
                <p style="text-align: left;"><input type="radio" name="answer" value="c"> ${question.c}</p>
                <p style="text-align: left;"><input type="radio" name="answer" value="d"> ${question.d}</p>
                <button style="text-align: center; width: 170px; height: 40px; background-color: rgb(89, 0, 173); border-radius: 10px; border: none; font-size: 16px; color: white;" onclick="submitAnswer(${index})">Submit</button>
            </div>
        `;

				ques.appendChild(div);
				index++;
	} else{
		clearInterval(interval)
		const pTime = document.querySelector('.pTime')
		pTime.innerHTML = '<h1>You have finished earlier Kiddo!!</h1>'
		displayResult()
	}
}

function displayResult(){
	const ques = document.querySelector('.ques')
	console.log(correctAns)
	ques.innerHTML = `
		<h1>Marks: ${correctAns} out of ${totalQues}</h1>
		<button style="text-align: center; width: 170px; height: 40px; background-color: rgb(89, 0, 173); border-radius: 10px; border: none; font-size: 16px; color: white;" onclick= "reloadPage()">Reload</button>
	`
}

function reloadPage(){
	location.reload()
}

function submitAnswer(num){
	const selectedOption = document.querySelector('input[name="answer"]:checked')
	if(!selectedOption){
		alert('Please select an option')
		return
	}

	const userAns = selectedOption.value
	const correctedAns = data[num].correct
	if(userAns === correctedAns){
		correctAns++
		numberOfQues++;
		generateQues()
	} else{
		numberOfQues++;
		generateQues()
	}
}

function removeStartBtn(){
	const strtBtn = document.querySelector('.start')
	strtBtn.parentElement.removeChild(strtBtn)
}

function remainingTime(){
	const timeElement = document.querySelector('.pTime');
    interval = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(interval);
            // alert("Time's up!");
						const pTime = document.querySelector('.pTime')
						pTime.innerHTML = `<h1>Time is Up!!</h1>`
            displayResult()
            return;
        }
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeElement.textContent = `Remaining Time: ${minutes} : ${seconds < 10 ? '0' + seconds : seconds} sec`;
    }, 1000);
}


