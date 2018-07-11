// create an array 

var todos = [];

// ask user for input
var input =prompt("What would you like me to do?");

// check what input is: if input is list - do one thing, is input is new - do another thing.
if(input === "list") {
  console.log(todos);
} else if(input === "new") {
  // as user for new todo
  var newTodo = prompt("Enter new 'Todo' ")
  // add the new todo to the todos array
  todos.push(newTodo);
}