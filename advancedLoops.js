basket = ['apples','oranges','grapes'];

// FOR OF - iterating in arrays,strings

for(item of basket){
	console.log(item);
}

// FOR IN - enumerating on objects (props of object are called enumerables)

const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 100
}

for(item in detailedBasket){
	console.log(item);
}