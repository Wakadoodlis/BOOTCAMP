// IF EVEN()

// function ifEven(num) {
//   // if even then it is true
//   if (num % 2 === 0) {
//     return true;
//   } 
//   // if not even then it is false
//   else {
//     return false;
//   }
// }

// ----OOOORRRRR ---

function ifEven(num) {
  return num % 2 === 0;
}


// -----=====  FACTORIAL ()====------- 

// var f = [];
// function factorial (n) {
//   if (n == 0 || n == 1)
//     return 1;
//   if (f[n] > 0)
//     return f[n];
//   return f[n] = factorial(n-1) * n;
// }

// ---- or ----

function factorial (num){
  // define the result variable
  var result = 1;
  // culculate
  for(var i = 2; i <= num; i++);
  result *= i;
  // returning
  return result;
}


// -----=====  kebab to snake()====------- 

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");  
  return newStr;
}