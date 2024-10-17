function wait1(ms){
	return new Promise(function(resolve, reject){
		setTimeout(()=>{
			resolve(ms);
		})
	})
}
function wait2(ms){
	return new Promise(function(resolve, reject){
		setTimeout(()=>{
			resolve(ms);
		})
	})
}
function wait3(ms){
	return new Promise(function(resolve, reject){
		setTimeout(()=>{
			resolve(ms);
		})
	})
}


function func(t1,t2,t3){
	return Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
}


// func(2000,4000,8000)
// .then((times)=>{
// 	const totalTime = times.reduce((acc, curr)=> acc + curr, 0);
// 	console.log('total time of all the promises is:', totalTime)
// })
// .catch((error)=>{
// 	console.log(error)
// })

module.exports = func