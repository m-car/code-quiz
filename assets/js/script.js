var body = document.body;
console.log(window);

console.log('Document Body: ');
console.log(document.body);

var divTags = document.querySelectorAll('div');

var gameContainer = document.getElementById('game-container');
var questionBox = document.getElementById('question-box');
var answerbox = document.getElementById('answer-box');
var startEl = document.getElementById('start-button');
var resetEl = document.getElementById('reset-button');
var scoreBrd = document.getElementById('scoreboard');
var timerEl = document.getElementById('timer');





//QUESTION/ANSWER OBJECTS. These will be questions with multiple answer values
var question1 = {
    q: "Inside which HTML element do we put the JavaScript?",
    a1: '<javascript>',
    a2: '<scripting>',
    a3: '<script>',
    a4: '<js>',
    correct: 'a3',

}

var question2 = {
    q: "What is the correct JavaScript syntax to change the content of the HTML element below? \n<p id=\"demo\">This is a demonstration.</p>",
    a1: 'document.getElementById("demo").innerHTML = "Hello World!"',
    a2: 'document.getElementById("p").intterHTML ="Hello World!"',
    a3: '#demo.innerHTML = "Hello World!"',
    a4: 'document.getElement("p").innerHTML = "Hello World!"',
    correct:'a4',
}

var question3 = {
    q: "Where is the correct place to insert a JavaScript?",
    a1: 'Both the <head> section and the <body> section are correct.',
    a2: 'The <head> section.',
    a3: 'The <body> section.',
    a4: 'The <footer> section.',
    correct: 'a3',
}
var question4 = {
    q: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a1: '<script name = "xxx.js">',
    a2: '<script href = "xxs.js">',
    a3: '<script src = "xxs.js">',
    a4: '<script alt = "xxs.js">',
    correct: 'a3',
}
var question5 = {
    q: "The external JavaScript file must contain the <script> tag?",
    a1: 'True',
    a2: 'False',
    a3: 'Both',
    a4: 'Dont choose this one',
    correct: 'a2',
}
var question6 = {
    q: "How do you write 'Hello World' in an alert box?",
    a1: 'alert("Hello world");',
    a2: 'alertBox("Hello World");',
    a3: 'msgBox("Hello World");',
    a4: 'msg("Hello World");',
    correct: 'a1',
}
var question7 = {
    q: "How do you create a function in JavaScript?",
    a1: 'function = myFunction()',
    a2: 'function:myFunction()',
    a3: 'function myFunction()',
    a4: 'take me to funcy town',
    correct: 'a1',
}

//Question Bank Declaration
var questionBank = [question1, question2, question3, question4, question5, question6, question7]
console.log(questionBank)

//initial CSS 
header.children[0].style.fontSize = '40px';

divTags[0].setAttribute('style','font-size: 50px');
divTags[1].setAttribute('style','font-size: 20px; font-weight: bold; ');




// display landing screen: welcome message, scoreboard 0, timer 
//changing content
questionBox.textContent = 'questions will go here. Push Start!';
answerbox.textContent = 'answers will go here';
scoreBrd.textContent = 'wins: 0';

//***FUNCTIONS***

//Timer
var secondsLeft;
function timer(){
    secondsLeft = 15;
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
    //reset text on page
    answerbox.textContent='';
    //start timer
    timer();
    var i = rand(questionBank.length);
    //questions selected from a pool of questions RANDOMLY
    questionBox.textContent= questionBank[i].q;
    //answers displayed from pool of answers per question. array, key value pairs, objects?
    var listEl1 = document.createElement('li');
    listEl1.textContent = questionBank[i].a1;
    answerbox.appendChild(listEl1);
    var listEl2 = document.createElement('li');
    listEl2.textContent = questionBank[i].a2;
    answerbox.appendChild(listEl2);
    var listEl3 = document.createElement('li');
    listEl3.textContent = questionBank[i].a3;
    answerbox.appendChild(listEl3);
    var listEl4 = document.createElement('li');
    listEl4.textContent = questionBank[i].a4;
    answerbox.appendChild(listEl4);
   

    
})








//push answers into list elements, that are buttons 

//logic: determine a correct answer, if chosen correct add to score
// if chosen is incorrect add to score
//change question and answers displayed after button click

// if timer < 0 stop game  
//alert player with scoreboard
//offer reset button