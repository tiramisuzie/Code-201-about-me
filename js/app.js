'use strict';
console.log ('js is linked');

//Greeting message
var greetings = prompt ('Would you like to play a guessing game?');
var greetingsResponse = greetings.toLowerCase();
console.log ('Q: Would you like to play a guessing game? A: ' + greetingsResponse);
var yes = 'yes';
if (greetingsResponse === yes) {
  alert ('awesome! I\'ll begin to ask some questions');
} else {(greetings !== yes);
  alert('oh come on, it will be fun');
}