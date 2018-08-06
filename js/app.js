'use strict';
console.log ('js is linked');

//Variables and Arrays
var correctAnswer = 0;

var question1 = 'Was I born in Seattle?';
var question2 = 'Do I like animals?';
var question3 = 'Have I been to Japan?';
var question4 = 'Do I have a sweet tooth?';
var question5 = 'Do I have any siblings?';

var response1 = 'That\'s correct! I was born and raised in Seattle, but somehow I am still not used to the rain.';
var response2 = 'I sure do! I even have a cute little shiba, she just turned 1 year and 4 months.';
var response3 = 'Correct. I just got back from Tokyo, I plan to visit other places in Japan soon.';
var response4 = 'You bet! I love sweets!';
var response5 = 'That\'s right. I have 2 siblings, a brother and sister. I am the youngest of both';

var incorrect1 = 'Not quite, I was born in Seattle.';
var incorrect2 = 'What? Who doesn\'t like animals?! I hope one day I can adopt at least 10 dogs.';
var incorrect3 = 'Not quite, I recently came back from Tokyo a few months ago';
var incorrect4 = 'Incorrect. I love sweets, maybe a little too much.';
var incorrect5 = 'Incorrect. I have a brother and a sister.';

var storingQuestions = [question1, question2, question3, question4, question5];
var storingResponses = [response1, response2, response3, response4, response5];
var storingIncorrect = [incorrect1, incorrect2, incorrect3, incorrect4, incorrect5];

start(false);

function start(enable) {
  if (enable) {
    var userName = welcome();
    startQuiz();
    result(userName);
  }
}

function welcome() {
  //Welcome ask name
  var userName = prompt ('Hi, Nice to meet you, what is your name?');
  console.log ('vistor\'s name is ' + userName);
  alert ('welcome ' + userName + '! I hope you can learn a little bit about me.');
  return userName;
}

function startQuiz() {
  //Ask questions 1 through 5
  askingQuestions(storingQuestions, storingResponses, storingIncorrect);
  askingNumber();
  askingDessert(dessert);
}

function askingQuestions(myArray, responsesArray, incorrectArray) {
  //Prompt user with questions and make lower case
  for(var i = 0; i < myArray.length; i++){
    var gameAnswer = prompt (myArray[i]).toLowerCase();

    //Log question and answer in console
    console.log (myArray[i] + ' ' + gameAnswer);

    //If statements: If 'yes', display message, if 'no' display alternate message
    if (gameAnswer === 'yes' || gameAnswer === 'y') {
      alert (responsesArray[i]);
      correctAnswer++;
      console.log('correctAnswer: ' + correctAnswer);
    } else {
      alert (incorrectArray[i]);
    }
  }
}

//Guess my favorite number
function askingNumber(){
  for(var counter = 4;counter>0; counter--){
    var guessAge = prompt ('Can you guess what my favorite number is? you have ' + counter +' of tries left.');
    console.log ('Age Guessed: ' + guessAge);
    if (guessAge > 25){
      alert ('Too high, try again.');
    }
    else if (guessAge < 25){
      alert ('too low, try again.');
    }
    else if(guessAge === '25') {
      alert ('Amazing! You guessed correctly!');
      correctAnswer++;
      break;
    }
  }
}


//Guess what desserts I like
var dessert = ['cheesecake', 'tiramisu', 'chocolate'];
function askingDessert(dessertArray){
  for (var counterD=6; counterD>0; counterD--){
    var guessDessert = prompt ('Now can you figure out what dessert I like? I\'ll give you ' + counterD + ' tries').toLowerCase();
    console.log ('Dessert Guessed:' + guessDessert);

    if (dessertArray.includes (guessDessert)) {
      alert ('Wow! How did you know!!' + guessDessert + ' is one of my favorite desserts! ' + dessertArray.join(' ')+ ' are all my favorite desserts');
      correctAnswer++;
      break;
    } else {
      alert (guessDessert + ' sounds good, but it\'s not my ultimate favorite.');
    }
  }
}

function result(userName) {
  //number of correct answers
  console.log('number of correct answers '+ correctAnswer);
  if (correctAnswer>=4){
    alert('AMAZING! you got '+ correctAnswer +'/6 questions correct! ' + userName + ' you sure know a lot about me!');
  } else {
    alert('aww, you only got ' + correctAnswer +'/6 questions correct. '+ userName +', were you even trying?');
  }
}