'use strict';
console.log ('js is linked');

/*
//Welcome ask name
var userName = prompt ('Hi, Nice to meet you, what is your name?');
console.log ('vistor\'s name is ' + userName);
alert ('welcome ' + userName + '! I hope you can learn a little bit about me.');

//Play game
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
  alert ('so close. I am born in Seattle, but I was raised in China for 5 years.');
}
//

//major career change?
var career = prompt ('Did I decide to have a major career change?');
var careerChange = career.toLowerCase();
console.log ('Q: Did I decide to have a major career change? A: ' + careerChange);
if (careerChange === 'yes' || careerChange === 'y'){
  alert ('Yes! How did you know? I used to work at Amazon for 3 years as a contract specialist. I am so excited to transition to become an SDE!');
}else {
  alert ('suprisingly, I just quit my job to commit going to school full time! I didn\'t have any technical experience before but I\'ll work hard to fulfill my dreams!');
}
//Am I ready to be a SDE?
var sdeReady = prompt ('Am I ready to become an SDE');
var sdeReadyLower = sdeReady.toLowerCase();
console.log ('Q: Am I ready to be a SDE? A: ' + sdeReadyLower);
if (sdeReadyLower === 'yes' || sdeReadyLower === 'y') {
  alert ('Aww I am flattered! But I think I need a little bit more practice');
} else {
  alert ('Have a little more faith in me! I\'m going to be so amazing in 5 months!');
}*/

//Guess how old I am
for(var counter= 4;counter>0; counter--){
  var guessAge = prompt ('So how old do you think I am? you have ' + counter +' of tries left.');
  console.log ('Age Guessed: ' + guessAge);

  if (guessAge > 25){
    alert ('Do I really seem that old to you?? Try again, I\'m younger than you think.');
  }
  else if (guessAge < 25){
    alert ('Now you\'re flattering me. Try again, I\'m a little bit older than you might think');
  }
  else if(guessAge === '25') {
    alert ('Amazing! You guessed correctly!');
    break;

  }
}