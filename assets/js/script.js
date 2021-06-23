var body = document.body;
console.log(window);

console.log('Document Body: ');
console.log(document.body);

//Selector Declarations
var divTags = document.querySelectorAll('div');
var gameContainer = document.getElementById('game-container');
var questionBox = document.getElementById('question-box');
var answerbox = document.getElementById('answer-box');
var startEl = document.getElementById('start-button');
var resetEl = document.getElementById('reset-button');
var scoreBrd = document.getElementById('scoreboard');
var timerEl = document.getElementById('timer');

//Answer Buttons Declaration
var btnEl1 = document.createElement('button');
btnEl1.setAttribute('id','btn1')
var btnEl2 = document.createElement('button');
btnEl2.setAttribute('id','btn2')
var btnEl3 = document.createElement('button');
btnEl3.setAttribute('id','btn3')
var btnEl4 = document.createElement('button');
btnEl4.setAttribute('id','btn4')

//QUESTION/ANSWER OBJECTS. 
var question1 = {
    q: "Inside which HTML element do we put the JavaScript?",
    a1: '<javascript>',
    a2: '<scripting>',
    a3: '<script>',
    a4: '<js>',
    correct: '<script>',
}

var question2 = {
    q: "What is the correct JavaScript syntax to change the content of the HTML element below? \n<p id=\"demo\">This is a demonstration.</p>",
    a1: 'document.getElementById("demo").innerHTML = "Hello World!"',
    a2: 'document.getElementById("p").intterHTML ="Hello World!"',
    a3: '#demo.innerHTML = "Hello World!"',
    a4: 'document.getElement("p").innerHTML = "Hello World!"',
    correct:'document.getElementById("demo").innerHTML = "Hello World!"',
}

var question3 = {
    q: "Where is the correct place to insert a JavaScript?",
    a1: 'Both the <head> section and the <body> section are correct.',
    a2: 'The <head> section.',
    a3: 'The <body> section.',
    a4: 'The <footer> section.',
    correct: 'The <body> section.',
}
var question4 = {
    q: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a1: '<script name = "xxx.js">',
    a2: '<script href = "xxs.js">',
    a3: '<script src = "xxs.js">',
    a4: '<script alt = "xxs.js">',
    correct: '<script src = "xxs.js">',
}
var question5 = {
    q: "The external JavaScript file must contain the <script> tag?",
    a1: 'True',
    a2: 'False',
    a3: 'Both',
    a4: 'Dont choose this one',
    correct: 'False',
}
var question6 = {
    q: "How do you write 'Hello World' in an alert box?",
    a1: 'alert("Hello world");',
    a2: 'alertBox("Hello World");',
    a3: 'msgBox("Hello World");',
    a4: 'msg("Hello World");',
    correct: 'alert("Hello world");',
}
var question7 = {
    q: "How do you create a function in JavaScript?",
    a1: 'function = myFunction()',
    a2: 'function:myFunction()',
    a3: 'function myFunction()',
    a4: 'take me to funcy town',
    correct: 'function = myFunction()',
}

//Question Bank Declaration
var questionBank = [question1, question2, question3, question4, question5, question6, question7]


//user object
var user = {
    name: '',
    highscore: '',
}


//CSS
header.children[0].style.fontSize = '40px';
divTags[0].setAttribute('style','font-size: 50px');
divTags[1].setAttribute('style','font-size: 20px; font-weight: bold; ');
// answerbox.style.display ='column';




var wins= 0;
var highscore = 0;
// Landing Page starting Content
questionBox.textContent = 'questions will go here. Push Start!';
answerbox.textContent = 'answers will go here';
scoreBrd.textContent = 'wins:'+ wins +'highScore:' + highscore;




//***FUNCTIONS***

//Timer
//TODO TIMER NEEDS TO RESTART WHEN START IS CLICKED
var secondsLeft;
function timer(){
    secondsLeft = 90;
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
// function rand(max){
//     return Math.floor(Math.random() * max);
// }
var currentQuestion;
var questionIndex = 0;
//Select random question object, and display question and answers on page
function questionRoll(){
    //questions selected and displayed from a pool of questions RANDOMLY
    questionIndex = (questionIndex + 1) % questionBank.length;
    questionBox.textContent= questionBank[questionIndex].q;
    currentQuestion = questionBank[questionIndex]
    
    //answers displayed from pool of answers per question object.
    btnEl1.textContent = questionBank[questionIndex].a1;
    answerbox.appendChild(btnEl1);
    
    btnEl2.textContent = questionBank[questionIndex].a2;
    answerbox.appendChild(btnEl2);
    
    btnEl3.textContent = questionBank[questionIndex].a3;
    answerbox.appendChild(btnEl3);
    
    btnEl4.textContent = questionBank[questionIndex].a4;
    answerbox.appendChild(btnEl4);
    //TODO push answers into list elements, that are buttons
}

// when I click START QUIZ ,
startEl.addEventListener('click', function(){
    //reset text on page
    questionBox.textContent = '';
    answerbox.textContent='';
    //start timer //TODO TIMER NEEDS TO RESTART WHEN START IS CLICKED
    timer();
    //display question/answers
    questionRoll();
    
})

function checkQuestion(event, answer){
    console.log(event);
    
    if(answer == currentQuestion.correct){
        console.log("CORRECT");
        wins++;
        scoreBrd.textContent = 'wins:'+ wins;
        localStorage.setItem('highscore', JSON.stringify(wins))
    }else{
        console.log("INCORRECT");
    }
    questionRoll();

}






//MAYBE compare object property NAME instead of value .. LESS TYPING

btnEl1.addEventListener('click', function(event){
    checkQuestion(event,currentQuestion.a1);
    //if wins > highscore , update highscore

})
btnEl2.addEventListener('click', function(event){
     checkQuestion(event,currentQuestion.a2)
    //adjust session score. wins losses 

    //if wins > highscore , update highscore

})
btnEl3.addEventListener('click', function(event){
    checkQuestion(event,currentQuestion.a3)
    //if wins > highscore , update highscore

})
btnEl4.addEventListener('click', function(event){
    checkQuestion(event,currentQuestion.a4)

    //if wins > highscore , update highscore

    
})


// if timer < 0 stop game  
//alert player with scoreboard
