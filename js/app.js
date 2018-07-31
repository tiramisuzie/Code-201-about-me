'use strict';
console.log ('js is linked');

//Greeting message
var greetings = prompt ('Would you like to play a guessing game?');
var greetingsResponse = greetings.toLowerCase();
console.log ('Q: Would you like to play a guessing game? A: ' + greetingsResponse);

if (greetingsResponse === 'yes' || greetingsResponse === 'y') {
  alert ('awesome! I\'ll begin to ask some questions');
} else {
  alert('oh come on, it will be fun');
}
//Asking my name
var guessName = prompt ('Is my name Suzanne?');
var guessNameLower = guessName.toLowerCase();
console.log ('Q: Is my name Suzanne? A: ' + guessNameLower);
if (guessNameLower === 'yes' || guessNameLower === 'y') {
  alert ('Great job! That\'s me. My parents asked a nurse in the hospital to give me an american name. Thanks to her I have a name people can pronounce!');
} else {
  alert ('Incorrect. My name really is Suzanne');
}
//Born in Seattle
var seattle = prompt ('Was I born in Seattle?');
var fromSeattle = seattle.toLowerCase();
console.log ('Q: Was I born in Seattle? A: ' + fromSeattle);
if (fromSeattle === 'yes' || fromSeattle === 'y'){
  alert ('That\'s right. I was born in Seattle, but spent a lot of time in China when I was younger');
} else {
  alert ('so close. I am born in Seattle, but I was raised in China for 5 years.')
}

//

//major career change?

//Am I ready to be a SDE?
var sdeReady = prompt ('Am I ready to become an SDE');
var sdeReadyLower = sdeReady.toLowerCase();
console.log ('Q: Am I ready to be a SDE? A: ' + sdeReadyLower);
if (sdeReadyLower === 'yes' || sdeReadyLower === 'y') {
  alert ('Aww I am flattered! But I think I need a little bit more practice');
} else {
  alert ('Have a little more faith in me! I\'m going to be so amazing in 5 months!');
}