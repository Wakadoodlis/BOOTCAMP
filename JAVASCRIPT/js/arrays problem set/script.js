// printReverse function

// var nums = [1,2,3,4,5,6];

// function printReverse() {
//   var nums = [1,2,3,4,5,6];
//   nums.forEach(function(nums){
//     nums.reverse();
//   });
//   console.log(nums)
// }



// var fruits = ["Banana", "Orange", "Apple", "Mango"];


// function myFunction() {
//     fruits.forEach(function(name){
//       console.log(name.reverse);
//     });
    
// }




var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var reverse1 = function() {
  var reversed = array.slice().reverse();
};

var reverse2 = function() {
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
};