const array = [1,2,10,16];

let double = [];
const newArray = array.forEach((num) => {
	double.push(num*2);
});

console.log(double);

// map,filter,reduce

const mapArray = array.map(num => num*2);
console.log(mapArray);

const filterArray = array.filter(num => num > 5);
console.log(filterArray);

const reduceArray = array.reduce((accumulator,num) => {
	return accumulator + sum;
},0);
console.log(reduceArray);


