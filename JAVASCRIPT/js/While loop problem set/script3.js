// // Print all numbers between -10 and 19
// console.log("Print all numbers between -10 and 19");


//  WHILE LOOP
// var num = -10;
// while(num <= 19){
//   console.log(num);
//   num++;
// }


// FOR LOOP

for(var num = -10; num<= 19; num++) {
  console.log (num);
}

// // Print all even numbers between 10 and 40
// console.log("Print all even numbers between 10 and 40");
//  WHILE LOOP

// var num = 10;
// // while(num <= 40) {
// //   console.log(num);
// //   num+=2
// // }
// // or
// while(num <= 40) {
//   if(num % 2 === 0){
//   console.log(num);
// }
//   num+=1
// }

// FOR LOOP

for(var num = 10; num <= 40; num+=2) {
  console.log(num);
}



// // Print all odd numbers between 300 and 333
// console.log("Print all odd numbers between 300 and 333");

//  WHILE LOOP
// var num = 300;
// while(num <= 333) {
//   if(num % 2 !== 0){
//   console.log(num);
// }
//   num+=1
// }


// FOR LOOP
 
for(var num =300; (num<= 333) num % 2 !==0; num+=1 ) {
  console.log(num);
}

// // Print all numbers divisible by 5 and 3 between 5 and 50

// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
//  WHILE LOOP

// var num = 5;

// while(num <= 50) {
//   if(num % 5 ===0 && num % 3  ===0){
//   console.log(num);
// }
//   num+=1
// }


// FOR LOOP

for (var num =5; (num<=50) num % 5 === 0 && num % 3 ===0) {
  console.log(num);
}