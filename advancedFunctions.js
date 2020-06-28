// Closures - A fxn ran. It executed. It's never going to run again. BUT it's going to remember that there
// are references to those variables. The child scope always has access to the parent scope,
// but not vice-versa.

const first = () => {
	const greet = 'Hi';
	const second = () => {
		const name = "Bobby";
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// Currying - Converting a fxn that takes multiple arguments to a fxn that takes them one at a time.
const multiply = (a,b) => a*b;

const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);


//Compose - Output of one fxn fed as input to another fxn.
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose(sum,sum)(5); // Output: 7


// Avoiding side effects, functional purity.
var a = 1;
function b() {
	a = 2;
}

