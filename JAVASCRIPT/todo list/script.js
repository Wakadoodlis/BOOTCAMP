// TODO application.


// setTime function, kad html greiciau uzsikrautu del prompt ir alert.

window.setTimeout(function() {
  // creating an array 
  var todos = ["love Gintare every single day"];

  // ask user for input
  var input =prompt("What would you like me to do?");
  
  // check what input is: if input is list - do one thing, is input is new - do another thing.
  while(input !== "quit") {
    // handling inputs
    if(input === "list") {
      listTodos();
    } else if(input === "new") {
      newTodos();
    }  else if (input === "del") {
      delTodos();
    } else if(input !== "list" && input !== "new" && input !== "del") {
      notTodos();
    }
    // ask user again
    input = prompt("What would you like me to do?");
  }
  // if while loop is false
  alert( "You just quit the 'Todo' app");

// creating functions that code would be dry
  function listTodos(){
    console.log("************");
    todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
    });
    console.log("************");
  }
  
  function newTodos() {
    // ask user for new todo
     var newTodo = prompt("Enter new 'Todo' ")
    // add the new todo to the todos array
    todos.push(newTodo);
    console.log("Added new Todo")
  }
  
  function notTodos() {
    alert("In order to use this app, please use 'new', 'list' 'del' or 'quit' functions from the instruction ")
  }
  
  function delTodos() {
    var index = prompt("Enter index of Todo, that You want to delete.")
    todos.splice(index, 1);
    alert("Todo of index " + index + " was deleted.")
  }

}, 1000);


