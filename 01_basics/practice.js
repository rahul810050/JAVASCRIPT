function capitalizeFirstLetter(str) {
	if (typeof str !== 'string' || str.length === 0) return '';
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Usage
console.log(capitalizeFirstLetter('hello')); // Output: 'Hello'

// Remove duplicates from an array
function removeDuplicates(arr) {
	return [...new Set(arr)]; //The Set will automatically filter out the duplicate values: {1, 2, 3, 4, 5}
													// The spread operator converts the Set back into an array: [1, 2, 3, 4, 5]
}

// Usage
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


// Format a date to 'YYYY-MM-DD' format
function formatDate(date) {
	const year = date.getFullYear(); // This line extracts the full year (e.g., 2024) from the Date object using the getFullYear() method.
	const month = String(date.getMonth() + 1).padStart(2, '0'); // date.getMonth() returns the month from the Date object as a zero-based value (0 for January, 1 for February, etc.).
	// date.getMonth() + 1 adjusts the month to a one-based value. 
	// padStart(2, '0') pads the string with leading zeros to ensure it is always two characters long (e.g., 01 for January, 02 for February, etc.).
	const day = String(date.getDate()).padStart(2, '0'); // date.getDate() returns the day of the month from the Date object.
	return `${year}-${month}-${day}`;
}

// Usage
console.log(formatDate(new Date())); // Output: '2024-06-26' (or current date)
