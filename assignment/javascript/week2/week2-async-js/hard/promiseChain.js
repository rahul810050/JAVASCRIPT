const func = require('./PromiseAll.js')

function wait1(t1){
	return new Promise(function(resolve, reject){
		setTimeout(()=>{
			resolve(t1);
		}, t1)
	})
}
function wait2(t1){
	return new Promise(function(resolve, reject){
		setTimeout(()=>{
			resolve(t1);
		}, t1)
	})
}
function wait3(t1){
	return new Promise(function(resolve, reject){
		setTimeout(()=>{
			resolve(t1);
		}, t1)
	})
}


function funcLocal(t1,t2,t3){
	return Promise.all([wait1(t1),wait2(t2),wait3(t3)]);
}


Promise.all([func(2000,7000,10000), funcLocal(3000,6000,7000)])
.then(([time, localTime])=> {
	const totalTime = time.reduce((a, sum)=> a+sum, 0);
	const totalLocalTime = localTime.reduce((a, sum)=> a+sum, 0);
	return [totalTime, totalLocalTime];
}).then((time)=> {
	if(time[0] == time[1]){
		console.log('the time of both the file is same...the time is:', time[0]);
	} else{
		console.log('the time of promise.js file is:', time[0]);
		console.log('the time of promiseChain is:', time[1]);
	}
}). catch((err)=> {
	console.log(err)
})
