// Question

// var ask = prompt("Are we here yet?");
// // loop
// while(ask !== "yes" && ask !== "yach" ) {
//   var ask = prompt("Are we here yet?");
// }
// alert("Yes, we finally here!");


// VERSION 2

var ask = prompt("Are we here yet?");
// loop with indexOf()
while(ask.indexOf("yes") === -1) {
  var ask = prompt("Are we here yet?");
}
alert("Yes, we finally here!");