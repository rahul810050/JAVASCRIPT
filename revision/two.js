// const func = require("../assignment/javascript/week2/week2-async-js/hard/PromiseAll");

function sleep(time){
	let timePassed = 0;
	return new Promise(function(resolve){

		timePassed += time;
		setTimeout(function(){
			console.log(timePassed, 'sec passed')
			resolve(time);
		})
	})
}


function funck(){
	return Promise.all([sleep(2000), sleep(4000), sleep(6000)]);
}

module.exports = funck