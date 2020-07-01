const array = [1,[2,3],[4,5]];
array.flat();

const array2 = [1,[2,3],[4,[5]]];
array.flat(2);

const entries = ['bob','sally',,,,,,'cindy'];
entries.flat();

const userEmail = '       eddytheeagle@gmail.com';
const userEmail2 = 'johnnydangerous@gmail     ';

userEmail.trimStart();
userEmail2.trimEnd();

userProfiles = [['commander',23],['derek',40],['hansel',18]];

Object.fromEntries(userProfiles);  // converting to object

try{
	4 + 5
} catch {
	console.log('You messed up')
}