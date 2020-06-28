const player = 'Bobby';
let experience = 100;
let wizardLevel = false;

if(experience > 90){
	let wizardLevel = true; // new scope, doesn't update wizardLevel, using 'var' does.
}

const obj = {
	player : 'Bobby',
	experience : 100,
	wizardLevel: false
} // Cannot reassign obj but can reassign properties of obj

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player,experience } = obj;
let {wizardLevel} = obj;

const name = 'john snow';

const obj = {
	[name] : 'hello',
	['ray' + 'smith'] : 'hihi'
}

const obj = { // Property name same as property value -> remove a : a
	a,
	b,
	c
}

const name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;

// Default arguments
function greet(name='',age=30,pet='cat'){
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;
}

// Symbols
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3 // returns false; completely unique, no conflicts

// Arrow Functions
function add(a,b) {
	return a+b;
}

const add = (a,b) => (a + b);


