'use strict';
console.log ('js is linked');

//Variables and Arrays
var correctAnswer = 0;

var question1 = 'Would you like to play a guessing game?';
var question2 = 'Is my name Suzanne?';
var question3 = 'Was I born in Seattle?';
var question4 = 'Did I decide to have a major career change?';
var question5 = 'Am I ready to become an SDE';

var storingQuestions = [question1, question2, question3, question4, question5];

function askingQuestions(myArray){
  //Prompt user with questions and make lower case
  for(var i = 0; i < myArray.length; i++){
    var gameAnswer = prompt (myArray[i]).toLowerCase();

    //Log question and answer in console
    console.log (myArray[i] + ' ' + gameAnswer);

    //If statements: If 'yes', display message, if 'no' display alternate message
    if (gameAnswer === 'yes' || gameAnswer === 'y') {
      alert ('That\'s great! You got it correct!');
    } else {
      alert('Incorrect.');
    }
  }
}

askingQuestions(storingQuestions);

// //Welcome ask name
// var userName = prompt ('Hi, Nice to meet you, what is your name?');
// console.log ('vistor\'s name is ' + userName);
// alert ('welcome ' + userName + '! I hope you can learn a little bit about me.');

// //Play game
// var greetings = prompt (question1).toLowerCase();
// console.log ('Q: Would you like to play a guessing game? A: ' + greetingsResponse);

// if (greetingsResponse === 'yes' || greetingsResponse === 'y') {
//   alert ('awesome! I\'ll begin to ask some questions');
// } else {
//   alert('oh come on, it will be fun');
// }
// //Asking my name
// var guessName = prompt (question2);
// var guessNameLower = guessName.toLowerCase();
// console.log ('Q: Is my name Suzanne? A: ' + guessNameLower);
// if (guessNameLower === 'yes' || guessNameLower === 'y') {
//   alert ('Great job! That\'s me. My parents asked a nurse in the hospital to give me an american name. Thanks to her I have a name people can pronounce!');
//   correctAnswer++;
// } else {
//   alert ('Incorrect. My name really is Suzanne');
// }
// //Born in Seattle
// var seattle = prompt (question3);
// var fromSeattle = seattle.toLowerCase();
// console.log ('Q: Was I born in Seattle? A: ' + fromSeattle);
// if (fromSeattle === 'yes' || fromSeattle === 'y'){
//   alert ('That\'s right. I was born in Seattle, but spent a lot of time in China when I was younger');
//   correctAnswer++;
// } else {
//   alert ('so close. I am born in Seattle, but I was raised in China for 5 years.');
// }
// //

// //major career change?
// var career = prompt (question4);
// var careerChange = career.toLowerCase();
// console.log ('Q: Did I decide to have a major career change? A: ' + careerChange);
// if (careerChange === 'yes' || careerChange === 'y'){
//   alert ('Yes! How did you know? I used to work at Amazon for 3 years as a contract specialist. I am so excited to transition to become an SDE!');
//   correctAnswer++;
// }else {
//   alert ('suprisingly, I just quit my job to commit going to school full time! I didn\'t have any technical experience before but I\'ll work hard to fulfill my dreams!');
// }
// //Am I ready to be a SDE?
// var sdeReady = prompt (question5);
// var sdeReadyLower = sdeReady.toLowerCase();
// console.log ('Q: Am I ready to be a SDE? A: ' + sdeReadyLower);
// if (sdeReadyLower === 'yes' || sdeReadyLower === 'y') {
//   alert ('Aww I am flattered! But I think I need a little bit more practice');
//   correctAnswer++;
// } else {
//   alert ('Have a little more faith in me! I\'m going to be so amazing in 5 months!');
// }

// //Guess how old I am
// for(var counter= 4;counter>0; counter--){
//   var guessAge = prompt ('So how old do you think I am? you have ' + counter +' of tries left.');
//   console.log ('Age Guessed: ' + guessAge);

//   if (guessAge > 25){
//     alert ('Do I really seem that old to you?? Try again, I\'m younger than you think.');
//   }
//   else if (guessAge < 25){
//     alert ('Now you\'re flattering me. Try again, I\'m a little bit older than you might think');
//   }
//   else if(guessAge === '25') {
//     alert ('Amazing! You guessed correctly!');
//     correctAnswer++;
//     break;

//   }
// }
// //Guess what desserts I like
// var dessert = ['cheesecake', 'tiramisu', 'chocolate'];
// for (var counterD=6; counterD>0; counterD--){
//   var guessDessert = prompt ('Now can you figure out what dessert I like? I\'ll give you ' + counterD + ' tries').toLowerCase();
//   console.log ('Dessert Guessed:' + guessDessert);

//   if (dessert.includes (guessDessert)) {
//     alert ('Wow! How did you know!!' + guessDessert + ' is one of my favorite desserts! ' + dessert.join(' ')+ ' are all my favorite desserts');
//     correctAnswer++;
//     break;
//   } else {
//     alert (guessDessert + ' sounds good, but it\'s not my ultimate favorite.');
//   }
// }
// //number of correct answers
// console.log('number of correct answers '+ correctAnswer);
// if (correctAnswer>=4){
//   alert('AMAZING! you got'+ correctAnswer +' /6 questions correct!' + userName + 'you sure know a lot about me!');
// } else {
//   alert('aww, you only got' + correctAnswer +' /6 questions correct.'+ userName +', were you even trying?');
// }
