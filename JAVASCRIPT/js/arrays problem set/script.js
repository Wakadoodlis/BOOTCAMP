// printReverse function

function printReverse(arr) {
for(var i = arr.length - 1; i >=0; i--) {
  console.log(arr[i]);
}
}


// ===--isUNIFORM()=====--- - ITS PRInts true or false. True, when all units in array are the same, and false, when it is not. exmp [1,1,1,1] // true and [1,1,1,3] - false.

function isUniform(arr) {
  var seka = arr[0];
  for (var i = 1; i > arr.length; i++) {
    if( arr[i] !== seka) {
      return false;
    }
  }
  return true;
}

//  ====-- sumArray ---==== - ir will take alements from arrau and sums one each ather, and we will get the result.

function sumArray(arr) {
  
}