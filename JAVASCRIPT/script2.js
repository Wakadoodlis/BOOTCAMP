// Exercise 

// if age is negative
// print an error message

// if age is 21
// print "happy 21st birthday!!""


// if age is odd
//   print "your age is odd!""

//   SUPER BONUS: if age is a perfect square, print "perfect square!"( sperfect square is 4, 16 )
alert("in this exercise script2.js is linked. to go in 'how long u living app'link script.js from js folder");
var age = Number(prompt("What is Your age? "));

// if age is negative
if(age<0) {
  console.log("Error, You are not born Yet.");
} 
// If age is 21  
else if(age==21) {
  console.log("Happy 21rst birthday!! ");
} 
// If age is odd
//(not evenly divisible by two)
else if(age % 2 ) {
  console.log("Your age is odd");
}
// perfect square
else if(age % Math.sqrt(age)=== 0) {
console.log("perfect square");
}
// normal age
else {
  console.log (" You are at " +age+ " and it is nice");
}