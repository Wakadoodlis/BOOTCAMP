// ------======  first exercise ====-----=-=
// ------======  Full name and age exercise in console.log ====-----=-=

// var name = prompt( "what is your name");
// var lastName = prompt( "what is your last name");
// var age = prompt("what is your age");
// var fullName = +name+ " " +lastName

// console.log( "Your full name is " +fullName);
// console.log( "You are " +age +" years old");

// ------======  secand exercise ====-----=-=

// ------======  How long are You living on earth ====-----=-=

var name = prompt( "Hello, my name is Mac. What is your name ?");
var age = prompt("Nice to meet You " +name+ ". "+ "Could I ask You, what is Your age?");
var yourDaysOnErth = age * 365;

alert( "oh, You are so young! You are living on earth just roughly " +yourDaysOnErth+ " days.");

var married = prompt("Are You single or married?")
var husbandName =  prompt("oh what a shame... What is Your husband's name then? ")

var husbandAge = prompt("What is " +husbandName+ " " + "age?");
var YourHusbandAgeOnEarth = husbandAge * 365;
var youAreOlder = yourDaysOnErth - YourHusbandAgeOnEarth;

alert("Perdon? so You are older then " +husbandName+ " " +"for " +youAreOlder+ " days...");

alert(" and because You are older - You are also and SMARTER,CONGRUTALATIONS");

alert("It was nice to talk with You " +name+ " ! See You next time.")
