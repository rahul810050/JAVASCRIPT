const fs = require('fs')

fs.readFile('file.txt', 'utf-8', (err, content)=> {
	if(err) console.log('Bhai error aa gya:', err)

		const data = content.replace(/\s+/g, ' ').trim();

		console.log(data)

		fs.writeFile('file.txt', data, (err)=> {
			if(err) console.log(err);
		})
})