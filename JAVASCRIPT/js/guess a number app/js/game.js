alert("This is 'Gues a number game'. You have to gues a number from 0 to 10. If You succeed, you will feel satisfaction :) ")

// create a number
var correctNumber = 9;
// ask user for a guess
var number = Number(prompt( "Guess a number! "));

// check if user guess it
if(number<correctNumber) {
  alert("Your number " +number+ " to low. Try again");
}
else if(number>correctNumber){
  alert("Your number " +number+ " to big. Try again"); 
}
else if(number===correctNumber) {
  alert( "You have won! It is a correct number");
}
while (number<correctNumber || number>correctNumber) {
  
}