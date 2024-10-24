// // console.log(process.argv) // we pass argument through the command line

// const fs = require('fs')

// function func(filename){
// 	fs.readFile(filename, 'utf-8', function(err, data){

// 		if(err){
// 			console.log('error aa gya bhai:', err)
// 		}

// 		let count = 0;
// 		data = data.replace("/\s+/g", ' ').trim();
// 		for(let i = 0; i < data.length; i++){
// 			if(data[i] === ' '){
// 				count++;
// 			}
// 		}
// 		console.log(count + 1)
// 	})
// }

// func(process.argv[2])



const fs = require('fs')
const {Command} = require('commander')

const program = new Command()

program
	.name('myPA')
	.description('do what i say')
	.version('1.5.0');

	program.command('count')
	.description('count the number of words in the file')
	.argument('<file>', 'file to count')
	.action((file)=> {
		fs.readFile(file, 'utf-8', (err, data)=>{
			if(err){
				throw Error(`file not found ${file}`)
			} else{
				const words = data.split(' ').length
				const lines = data.split('\n').length
				console.log(`there are ${lines} lines in this file ${file}`)
				console.log(`there are ${words} words in this file ${file}`)
			}
		})
	})

	program.parse()