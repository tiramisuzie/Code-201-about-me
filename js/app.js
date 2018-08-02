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

function askingQuestions(myArray) {
  //Prompt user with questions and make lower case
  for(var i = 0; i < myArray.length; i++){
    var gameAnswer = prompt (myArray[i]).toLowerCase();

    //Log question and answer in console
    console.log (myArray[i] + ' ' + gameAnswer);

    //If statements: If 'yes', display message, if 'no' display alternate message
    if (gameAnswer === 'yes' || gameAnswer === 'y') {
      alert ('That\'s great! You got it correct!');
      correctAnswer++;
    } else {
      alert('Incorrect.');
    }
  }
}



//Welcome ask name
var userName = prompt ('Hi, Nice to meet you, what is your name?');
console.log ('vistor\'s name is ' + userName);
alert ('welcome ' + userName + '! I hope you can learn a little bit about me.');

//Ask questions 1 through 5
askingQuestions(storingQuestions);

//Guess how old I am
function askingNumber(){
  for(var counter = 4;counter>0; counter--){
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
      correctAnswer++;
      break;
    }
  }
}

askingNumber();



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
