function palindrome(str){

	const rev_str = str.split('').reverse().join('')

	if(str === rev_str) return true
	else return false
}

console.log(palindrome('aabbaa'))
console.log(palindrome('abc'))