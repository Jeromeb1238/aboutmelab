'use strict';

// Ask user name and return a welcome msg w/ name
var userName = prompt('Welcome to the site.  What is your name?');
// console.log('User name is ' + userName);
alert('Welcome ' + userName + ' to the site.');

// Start a 5 question yes/no quiz about me
confirm('Would you like to take a 5 question quiz about me?');

// Question 1
var native = prompt('Am I a native of Seattle');
native = native.toLowerCase();
// console.log('User answer to native question ' + native);
if (native == 'yes' || native == 'y') {
  alert('Correct, I am a native of Seattle');
} else if (native != 'yes' || native != 'y') {
  console.log('User did not get \'Native of Seattle\' question correct?');
  alert('That is not correct, I am a native of Seattle');
}

// Question 2
var historyQuestion = prompt('Do you think I like history?');
historyQuestion = historyQuestion.toLowerCase();
// console.log('User response to history question = ' + historyQuestion);
if (historyQuestion == 'yes' || historyQuestion == 'y') {
  alert('Yes, I do like history');
} else if (historyQuestion != 'yes' || historyQuestion == 'y') {
  alert('Actually I do like history');
}

// Question 3
var childrenQuestion = prompt('Do I have any children?');
childrenQuestion = childrenQuestion.toLocaleLowerCase();
// console.log('User response to children = ' + childrenQuestion);
if (childrenQuestion == 'yes' || childrenQuestion == 'y') {
  alert('Yes I do have children');
} else if (childrenQuestion != 'yes' || childrenQuestion != 'y') {
  alert('Actually I do have children.');
}

// Question 4
var physicalQuestion = prompt('Do I like to work out?');
physicalQuestion = physicalQuestion.toLocaleLowerCase();
// console.log('User response to physical excercise = ' + physicalQuestion);
if (physicalQuestion == 'yes' || physicalQuestion == 'y') {
  alert('Yes I love to work out!');
} else if (physicalQuestion != 'yes' || physicalQuestion == 'y') {
  alert('Actually I like to work out.');
}

// Question 5
var chefQuestion = prompt('Am I a chef?');
chefQuestion = chefQuestion.toLocaleLowerCase();
// console.log('User response to chef question  = ' + chefQuestion);
if (chefQuestion == 'no' || chefQuestion == 'n') {
  alert('Correct, I am not a chef but wish I was.');
} else if (chefQuestion != 'no' || childrenQuestion != 'n') {
  alert('Incorrect, I wish I was a chef.');
}
// Final message to User
alert('Thank you ' + userName + ' for taking the quiz.');