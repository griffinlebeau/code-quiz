var questions = [
    {
        question: "What is an anonymous function?",
        correct: "a function without a name",
        incorrectUno: "a function without a variable",
        incorrectDos: "a function without an argument"
    },
    {
        question: "Which method will be used to convert data prior to being sent to local storage?",
        correct: "JSON.parse()",
        incorrectUno: "JSON.compute()",
        incorrectDos: "JSON.convert()"
    },
    {
        question: "What does JSON stand for?",
        correct: "Java Script Object Notation",
        incorrectUno: "Java Script Oriented Notation",
        incorrectDos: "Java Script Onset Node"
    },
    {
        question: "How much padding will be applied to the left side of an element with this class: 'padding: 25px 50px 75px 100px'?",
        correct: "100 pixels",
        incorrectUno: "25 pixels",
        incorrectDos: "50 pixels"
    },
    {
        question: "Which HTML tag is used to embed an image in a webpage?",
        correct: "<img>",
        incorrectUno: "<image>",
        incorrectDos: "<picture>"
    },
    {
        question: "Which of these is NOT a way to declare a variable?",
        correct: "val _______",
        incorrectUno: "var _______",
        incorrectDos: "const ______"
    },
    {
        question: "What does OOP stand for?",
        correct: "Object Oriented Programming",
        incorrectUno: "Object Outed Point",
        incorrectDos: "Object Of Programming"
    },
    {
        question: "What is the name of the most widely used Javascript package manager?",
        correct: "Node",
        incorrectUno: "Need",
        incorrectDos: "Nade"
    },
    {
        question: "Which symbol is used to assign a value to a variable?",
        correct: "=",
        incorrectUno: "->",
        incorrectDos: "-"
    },
    {
        question: "Which of these is not a Boolean value?",
        correct: "truth",
        incorrectUno: "true",
        incorrectDos: "false"
    }
];
var storage = localStorage.getItem("scores");
const quizQuestion = document.getElementById('quiz-question');
const optionUno = document.getElementById('li-one');
const optionDos = document.getElementById('li-two');
const optionTres = document.getElementById('li-three');
var answerEls = [optionUno, optionDos, optionTres];
const correctIn = document.getElementById('correct-indicator');
const scoreForm = document.getElementById('score-form');
scoreForm.style.display = "none";
const quizList = document.getElementById('quiz-list');
const clockContainer = document.getElementById('clock-con');
const clockLabel = document.getElementById('clock-label');
const correctCon = document.getElementById('correct-container')

shuffleArray = arr => {
    for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
    }
    return arr
};

scoreHandler = score => {
    if (!storage) {
        const scores = [];
        scores.push[score];
        localStorage.setItem("scores", JSON.stringify(scores));
    } else {
        const scores = JSON.parse(storage);
        scores.push(score);
        localStorage.setItem("scores", JSON.stringify(scores));
    }
}

function endQuiz(time) {
    var scoreDisplay = document.createElement('h3');
    scoreDisplay.innerText = time
    clockLabel.innerHTML = "Score:"
    clockContainer.appendChild(scoreDisplay);
    clock.style.display = "none";
    var newScore = {
        initials: "",
        score: time,
    };
    scoreForm.style.display = "block";
    scoreForm.addEventListener("submit", function(){
        const form = new FormData(scoreForm);
        const initials = form.get("initials");
        newScore.initials = initials;
        scoreHandler(newScore);
        console.log(newScore)

    })
}

var timeLeft = 75;
var clock = document.getElementById('clock');
var startTimer = function() {
    var timer = setInterval(function(){
        var clockTime = JSON.stringify(timeLeft--);
        clock.innerHTML = clockTime;
        if(timeLeft < 1){
            clearInterval(timer);
            timeLeft = 0;
            endQuiz(timeLeft);
        };
    }, 1000);
    }

function stopTimer(clock){
    score = clock.value
    clock.innerHTML = ""
}

const questionHandler = question => {
    answerEls = shuffleArray(answerEls);
    quizQuestion.innerText = question.question;
    answerEls[0].innerText = question.correct;
    answerEls[1].innerText = question.incorrectUno;
    answerEls[2].innerText = question.incorrectDos;
    console.log(answerEls);
    };


function quizLoop() {
    if(questions.length > 1){
        questionHandler(questions.pop());
    } else {
        endQuiz(timeLeft)
    }
    }
            
function startGame() {
        questions = shuffleArray(questions);
        console.log(questions);
        quizLoop(questions);
        quizList.addEventListener("click", function(evt){
            console.log(evt.target);
            console.log(answerEls[0])
            if (evt.target === answerEls[0]){
                correctIn.innerText = "Correct!";
                correctCon.classList.remove("has-background-danger")
                correctCon.classList.add("has-background-primary")
                quizLoop(); 
            } else {
                correctIn.innerText = "Incorrect!";
                correctCon.classList.remove("has-background-primary")
                correctCon.classList.add("has-background-danger")
                timeLeft -= 5
                quizLoop();
            }
        });
}


startGame();
startTimer();
