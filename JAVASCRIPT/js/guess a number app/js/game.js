alert("This is 'Gues a number game'. You have to gues a number from 0 to 10. If You succeed, you will feel satisfaction :) ")

// sukuriam skaiciu
var correctNumber = 6;
// ask user for a guess
// var number = Number(prompt( "Guess a number! ")); (galima ir taip bet padarom paprasciau)
var stringNumber = prompt( "Guess a number! ");
var number = Number(stringNumber);
// check if user guess it
// if(number===correctNumber) {
//   alert("YOU WON! It is a correct number");
// }
// IF number to big loop:
while(number>correctNumber || number<correctNumber ){
  if(number>correctNumber) {
    alert("Your number " +number+ " to big. Try again")
}
  

  if(number<correctNumber) {
    alert("Your number " +number+ " to low. Try again")
  }

  if(number===correctNumber) {
  alert("YOU WON! It is a correct number");
}

  var stringNumber = prompt( "Guess a number! ")
  var number = Number(stringNumber); 
}



// IF number to low loop
while(number<correctNumber){
  alert("Your number " +number+ " to low. Try again")
  var stringNumber = prompt( "Guess a number! ")
  var number = Number(stringNumber); 
  if(number===correctNumber) {
    alert("YOU WON! It is a correct number");
  }
}


// while(num <= 40) {
//   if(num % 2 === 0){
//   console.log(num);
// }
//   num+=1
// }