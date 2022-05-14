// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set the name to be 'Dane'
// Then we write a conditional to check if the name is set to 'Mary"
// If and only if the name is set to 'Mary' the console.log will show 'Hi, Mary!'
// If the name is set to anything other than 'Mary' the console.log will show 'How do you do?'
// Name is set to 'Dane', which is not 'Mary', so we expect the console.log to show 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First we declare a variable called "secret".
// Next we declare a variable called "code" and assign it the value 123.
// Then we state that if and only if "code" equals 123 then variable "secret" will be assigned the value 'super'
// and the value of variable "code" will be multiplied by 2.
// If the resulting value of "code" being multiplied by 2 results in a value greater than 250
// then the variable secret will be assigned the value 'duper'. We then console.log the value of "secret".
// 123 multiplied by 2 equals 246, therefore we should see 'super' in the console.log.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// In this code we have a boolean variable and two number variables. 
// Our boolean variable is declared to be called "isStudent" and it is assigned the value of true.
// Our first number variable is declared "age" and is assigned the value 34.
// Our second number variable is declared "zip" and is assigned the value 55407.
// We then evaluate that if and only if "isStudent" is assigned the value true 
// AND "zip" is assigned a value greater than 8000 we will see 'You're a student on the West Coast' in the console.log 
// If those two conditions are not met then we evaluate that if and only if "isStudent" is assigned the value false 
// AND "age" is assigned a value less than 30 we will see 'What are your hobbies?' in the console.log
// Next we evaluate a single variable, if and only if "isStudent" is assigned the value true,
// we will see 'Welcome to Prime!' in our console.log
// Finally in none of the above evaluations result in all conditions being met we will see
// 'How about the weather?' in our console.log
// Since the variable "isStudent" is assigned the value true we should see 'Welcome to Prime!' in the console.log


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX colorOne is set to red
// Should be let colorOne = 'blue'
let colorOne = 'red';
// FIX colorTwo is set to blue
// Should be let colorTwo = 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //FIX colorTwo is not defined in this expression
  // Should be colorTwo = 'purple
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX time should be set as a variable, not a constant
// Should be let time = 4
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//FIX code is checking the reverse, if minAge is less than or equal to age
// Should be
//if(age >= minAge) {
//  console.log('enter');
//} else {
//  console.log('no entry');
//}
//

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

