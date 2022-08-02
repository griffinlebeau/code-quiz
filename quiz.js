var questions = [
    {
        question: "What is an anonymous function?",
        correct: "correct",
        incorrectUno: "incorrect",
        incorrectDos: "incorrect"
    },
    {
        question: "Which method will be used to convert data prior to being sent to local storage?",
        correct: "correct",
        incorrectUno: "incorrect",
        incorrectDos: "incorrect"
    },
    {
        question: "What does JSON stand for?",
        correct: "correct",
        incorrectUno: "incorrect",
        incorrectDos: "incorrect"
    },
    {
        question: "How much padding will be applied to the left side of an element with this class: 'padding: 25px 50px 75px 100px'?",
        correct: "correct",
        incorrectUno: "incorrect",
        incorrectDos: "incorrect"
    },
    {
        question: "Which HTML tag is used to embed an image in a webpage?",
        correct: "correct",
        incorrectUno: "incorrect",
        incorrectDos: "incorrect"
    },
    {
        question: "Which of these is NOT a way to declare a variable?",
        correct: "correct",
        incorrectUno: "incorrect",
        incorrectDos: "incorrect"
    },
    {
        question: "What does OOP stand for?",
        correct: "correct",
        incorrectUno: "incorrect",
        incorrectDos: "incorrect"
    },
    {
        question: "What is the name of the most widely used Javascript package manager?",
        correct: "correct",
        incorrectUno: "incorrect",
        incorrectDos: "incorrect"
    },
    {
        question: "Which symbol is used to assign a value to a variable?",
        correct: "correct",
        incorrectUno: "incorrect",
        incorrectDos: "incorrect"
    },
    {
        question: "Which of these is not a Boolean data type?",
        correct: "correct",
        incorrectUno: "incorrect",
        incorrectDos: "incorrect"
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
    var newScore = {
        initials: "",
        score: "",
    };
    scoreForm.style.display = "block";
    scoreForm.addEventListener("submit", function(){
        const form = new FormData(scoreForm);
        const initials = form.get("initials");
        newScore.initials = initials;
        newScore.score = time;
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

const questionHandler = question => {
    answerEls = shuffleArray(answerEls);
    //console.log(answerEls);
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
                quizLoop(); 
            } else {
                correctIn.innerText = "Incorrect!";
                timeLeft -= 5
                quizLoop();
            }
        });
}


startGame();
startTimer();
