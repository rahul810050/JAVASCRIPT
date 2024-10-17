function anagram(str1, str2){

// Convert the strings to arrays, sort them, then join them back to strings
	const sortStr1 = str1.split('').sort().join('')
	const sortStr2 = str2.split('').sort().join('')

	if(sortStr1 === sortStr2){
		console.log("yes both the strings are anagram of each other")
	} else{
		console.log('no the strings are not ansgrams of each other')
	}
}

anagram('abacc', 'bcaca')