alert("This is 'Gues a number game'. You have to gues a number from 0 to 10. If You succeed, you will feel satisfaction :) ")

// sukuriam skaiciu
var correctNumber = 6;

// vartotojas speja
var stringNumber = prompt( "Guess a number! ");
var number = Number(stringNumber);

// while loop
while(number>correctNumber || number<correctNumber ){
  // jei pasirinktas skaicius didesnis
  if(number>correctNumber) {
    alert("Your number " +number+ " to big. Try again")
}
// jei pasirinktas skaicius mazesnis
  else if(number<correctNumber) {
    alert("Your number " +number+ " to low. Try again")
  }

  var stringNumber = prompt( "Guess a number! ")
  var number = Number(stringNumber);
  // jei pasirinktas skaicius sutampa
  if(number===correctNumber) {
  alert("YOU WON! It is a correct number");
}
  
}
