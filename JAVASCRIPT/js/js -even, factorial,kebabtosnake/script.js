// IF EVEN()

function ifEven(num) {
  if (num % 2 ===0) {
    return true;
  } else
    return false;
}


// FACTORIAL ()

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}


// KEBAB TO SNAKE ()

function kebabToSnake(str) {
  return str.replace(/-/g, "_");  
}