var body = document.body;
console.log(window);

console.log('Document Body: ');
console.log(document.body);

var questions = ['why is the ocean blue', 'what color is the truck?', 'do you like coffee?'];
var answers = ['the sky', 'red', 'yes']


















//Create elements
// var h1El = document.createElement('h1');
// var questionEl = document.createElement('div');
// var answersEl = document.createElement('div');
// var startBtnEl = document.createElement('button');
// var resetBtnEl = document.createElement('button');
// var scoreBoard = document.createElement('div');
// var header = document.getElementById('#header');

//text content elements
// h1El.textcontent = "Welcome to Code Quiz";
// document.body.appendChild(h1El);
// console.log(h1El.textContent);





var divTags = document.querySelectorAll('div');

var gameContainer = document.getElementById('game-container');
var questionBox = document.getElementById('question-box');
var answerbox = document.getElementById('answer-box');
var startEl = document.getElementById('start-button');
var resetEl = document.getElementById('reset-button');
var scoreBrd = document.getElementById('scoreboard');
var timerEl = document.getElementById('timer');

//initial CSS 
header.children[0].style.fontSize = '40px';

divTags[0].setAttribute('style','font-size: 50px');
divTags[1].setAttribute('style','font-size: 20px; font-weight: bold; ');

// display landing screen: welcome message, scoreboard 0, timer 
//changing content
questionBox.textContent = 'questions will go here. Push Start!';
answerbox.textContent = 'answers will go here';

//***FUNCTIONS***

//Timer
var secondsLeft = 15;
function timer(){
    var timerInterval = setInterval(function(){
        if (secondsLeft < 0){
            clearInterval(timerInterval);
            alert('OUT OF TIME');
        }else{
            
            timerEl.children[0].textContent = secondsLeft;
            secondsLeft--;
        }
    },1000) 
}

//Random Generator
function rand(max){
    return Math.floor(Math.random() * max);
}



// when I click START ,
startEl.addEventListener('click', function(){
    //start timer
    timer();
    i = rand(questions.length);
    //questions selected from a pool of questions RANDOMLY
    questionBox.textContent= questions[i];
    //answers displayed from pool of answers per question. array, key value pairs?
    var listEl = document.createElement('li');
    listEl.setAttribute('value','answer test');
    answerbox.children[0].appendChild(listEl);
    
})








//push answers into list elements, that are buttons 

//logic: determine a correct answer, if chosen correct add to score
// if chosen is incorrect add to score
//change question and answers displayed after button click

// if timer < 0 stop game  
//alert player with scoreboard
//offer reset button