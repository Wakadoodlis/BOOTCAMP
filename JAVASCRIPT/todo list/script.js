// create an array 

window.setTimeout(function() {
  var todos = [];

  // ask user for input
  var input =prompt("What would you like me to do?");
  
  // check what input is: if input is list - do one thing, is input is new - do another thing.
  while(input !== "quit") {
    // handling inputs
    if(input === "list") {
      alert(todos);
    } else if(input === "new") {
      // as user for new todo
      var newTodo = prompt("Enter new 'Todo' ")
      // add the new todo to the todos array
      todos.push(newTodo);
    } 
    if(todos == ""){
      alert ("Your list is empty")
    }
    // ask user again
    input = prompt("What would you like me to do?");
  }
  // if while loop is false
  alert( "You just quit the 'Todo' app");

}, 1000);
