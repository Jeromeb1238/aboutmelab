'use strict';

// Ask user name and return a welcome msg w/ name
var userName = prompt('Welcome to the site.  What is your name?');
alert('Welcome ' + userName + ' to the site.');

// declare var to count total correct answers
var totalCorrectAnswers = 0;

// Start a 5 question yes/no quiz about me
confirm('Would you like to take a 5 question quiz about me?');

// Question 1
var native = prompt('Am I a native of Seattle');
native = native.toLowerCase();
console.log('User answer to native question ' + native);

if (native === 'yes' || native === 'y') {
  alert('Correct, I am a native of Seattle');
  totalCorrectAnswers++
} else if (native !== 'yes' || native !== 'y') {
  alert('That is not correct, I am a native of Seattle');
}

// Question 2
var historyQuestion = prompt('Do you think I like history?');
historyQuestion = historyQuestion.toLowerCase();
console.log('User response to history question = ' + historyQuestion);

if (historyQuestion === 'yes' || historyQuestion === 'y') {
  alert('Yes, I do like history');
  totalCorrectAnswers++
} else if (historyQuestion !== 'yes' || historyQuestion === 'y') {
  alert('Actually I do like history');
}

// Question 3
var childrenQuestion = prompt('Do I have any children?');
childrenQuestion = childrenQuestion.toLocaleLowerCase();
console.log('User response to children = ' + childrenQuestion);

if (childrenQuestion === 'yes' || childrenQuestion === 'y') {
  alert('Yes I do have children');
  totalCorrectAnswers++
} else if (childrenQuestion !== 'yes' || childrenQuestion !== 'y') {
  alert('Actually I do have children.');
}

// Question 4
var physicalQuestion = prompt('Do I like to work out?');
physicalQuestion = physicalQuestion.toLocaleLowerCase();
console.log('User response to physical excercise = ' + physicalQuestion);

if (physicalQuestion === 'yes' || physicalQuestion === 'y') {
  alert('Yes I love to work out!');
  totalCorrectAnswers++
} else if (physicalQuestion !== 'yes' || physicalQuestion === 'y') {
  alert('Actually I like to work out.');
}

// Question 5
var chefQuestion = prompt('Am I a chef?');
chefQuestion = chefQuestion.toLocaleLowerCase();
console.log('User response to chef question  = ' + chefQuestion);

if (chefQuestion === 'no' || chefQuestion === 'n') {
  alert('Correct, I am not a chef but wish I was.');
  totalCorrectAnswers++
} else if (chefQuestion !== 'no' || childrenQuestion !== 'n') {
  alert('Incorrect, I wish I was a chef.');
}

// Question 6: Guess a number
var numChildren = '6';
var guessPrompt = alert('You get 4 tries to guess how many children I have');

for (var i = 1; i <= 4; i++) {
  var numGuess = prompt('Take a guess');
  console.log('num guessed was ' + numGuess);
  console.log ('iteration count ' + i);
  console.log('number of children ' + numChildren);
  if (numGuess === numChildren) {
    alert('That is correct, I have ' + ' children.');
    totalCorrectAnswers++
    break;
  } else if (numGuess > numChildren) {
      alert('You are too high');
  } else if(numGuess < numChildren) {
      alert('You are too low');
  }  
  if(i >= 4) {
  alert('You have used all your guesses.  The correct answer is ' + numChildren + ' children.');
  }
} 

// Question 7 create a loop to check an answer to multiple possibilities and loop to restrict number of guesses
var guessNumber = 1;
var maxNumGuess = 6
var cityNames = ['athens', 'rome', 'barcelona'];
var nameIsCorrect = false;
alert('Question 7: Guess one of my favorite travel cities.');

while (guessNumber <= maxNumGuess && !nameIsCorrect) {
  var nameAnswer = prompt('Guess a city.');
  
  for (var i = 0; i < cityNames.length; i++) {
    if (nameAnswer.toLowerCase() === cityNames[i]) {
      alert('Wow, that is an excellent guess, yes ' + nameAnswer + ' is one of my favorite cities.');
      nameIsCorrect = true;
      i = cityNames.length;
      totalCorrectAnswers++
      console.log('Correct answer; ' + nameAnswer + 'Guess # ' + guessNumber);
    }
  }
  if (!nameIsCorrect) {
    console.log('guess number ' + guessNumber + 'and max guess number is ' + maxNumGuess);
    if (guessNumber === maxNumGuess) {
      var city = '';
      for (var i = 0; i < cityNames.length; i++) {
        city += cityNames[i] + ', ';
        console.log('city ' + city);
      }
      alert('You are out of guesses.  The 3 cities were ' + city);
    }
    else {
      alert('Not this time, keep trying');
    }
    console.log('Answer; ' + nameAnswer + '.  Guess # ' + guessNumber);
    guessNumber++;
  }
}
// Final message to User
console.log('total correct answers ' + totalCorrectAnswers);
alert('Thank you ' + userName + ' for taking the quiz.  You got ' + totalCorrectAnswers + ' answers correct out of a possible 7.');
