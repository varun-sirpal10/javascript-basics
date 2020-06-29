let obj = {
	a : 'a',
	b : 'b',
	c : {
      deep : 'try and copy me'
	}
};

let clone = Object.assign({},obj);
let clone2 = {...obj}; // Shallow Clone - cloning only first layer

let superClone = JSON.parse(JSON.stringify(obj)); // Deep Clone

obj.c.deep = 'hahaha';
