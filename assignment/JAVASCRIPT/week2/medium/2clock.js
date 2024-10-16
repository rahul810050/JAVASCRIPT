function clock(){
	setInterval(()=> {
		const time = new Date()
		console.log('time is:', time.toLocaleTimeString())
	}, 1000)
}

clock()