var database = [
	{
		username: "Andrei",
		password: "supersecret"
	},
	{
		username: "Sally",
		password: "123"
	},
	{
		username: "Ingrid",
		password: "777"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "JavaScript is so cool!"
	}
];

function isUserValid(user,pass){
	database.forEach(function(val)){
		if(user === val.username && pass === val.password){
			return true;
		}
	}
	return false;
}

function signIn(user,pass){
	database.forEach(function(val)){
		if(isUserValid(user,pass)){
			console.log(newsFeed);
		}else{
			alert("Sorry, wrong username or password.");
		}
	}
}

var usernamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(usernamePrompt,passwordPrompt);

