// String padding at start and end

'Turtle'.padStart(10);
'Turtle'.padEnd(10);

// Easy iteration on objects
let obj = {
	'username0' : 'Santa',
	'username1' : 'Rudolf',
	'username2' : 'Mr.Grinch'
}

// Iteration on values only
Object.values(obj).forEach((value) => {
	console.log(value);
})

// Iteration on key,value pair
Object.entries(obj).forEach((value) => {
	console.log(value);
})


Object.entries(obj).map((value) => {
	return value[1] + value[0].replace('username','');
})


