var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

var length = todos.length;

for(var i=0;i<length;i++){
	todos.pop();
}

todos.forEach(function(task,i) {
	console.log(task,i);
})

function logTodos(todo,i){
	console.log(todo,i);
}

todos.forEach(logTodos);




