const questions = [
    {
        question: "What is an anonymous function?",
        correct: "",
        incorrectUno: "",
        incorrectDos: ""
    },
    {
        question: "Which method will be used to convert data prior to being sent to local storage?",
        correct: "",
        incorrectUno: "",
        incorrectDos: ""
    },
    {
        question: "What does JSON stand for?",
        correct: "",
        incorrectUno: "",
        incorrectDos: ""
    },
    {
        question: "How much padding will be applied to the left side of an element with this class: 'padding: 25px 50px 75px 100px'?",
        correct: "",
        incorrectUno: "",
        incorrectDos: ""
    },
    {
        question: "Which HTML tag is used to embed an image in a webpage?",
        correct: "",
        incorrectUno: "",
        incorrectDos: ""
    },
    {
        question: "Which of these is NOT a way to declare a variable?",
        correct: "",
        incorrectUno: "",
        incorrectDos: ""
    },
    {
        question: "What does OOP stand for?",
        correct: "",
        incorrectUno: "",
        incorrectDos: ""
    },
    {
        question: "What is the name of the most widely used Javascript package manager?",
        correct: "",
        incorrectUno: "",
        incorrectDos: ""
    },
    {
        question: "Which symbol is used to assign a value to a variable?",
        correct: "",
        incorrectUno: "",
        incorrectDos: ""
    },
    {
        question: "Which of these is not a Boolean data type?",
        correct: "",
        incorrectUno: "",
        incorrectDos: ""
    }
];

const quizQuestion = document.getElementById('quiz-question');
const optionUno = document.getElementById('li-one');
const optionDos = document.getElementById('li-two');
const optionTres = document.getElementById('li-three');
const answerEls = [optionUno, optionDos, optionTres];
const correctIn = document.getElementById('correct-indicator');
const scoreForm = document.getElementById('score-form');
scoreForm.style.display = "none";

shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j] = array[j], array[i]];
    }
};

scoreHandler = score => {
    if (!localStorage.getItem("scores")) {
        const scores = [];
        scores.push[score];
        localStorage.setItem("scores", JSON.stringify(scores));
    } else {
        const scores = JSON.parse(localStorage.getItem("scores"));
        scores.push(score);
        localStorage.setItem("scores", JSON.stringify(scores));
    }
}
function endQuiz() {
    var newScore = {};
    scoreForm.style.display = "block";
    scoreForm.addEventListener("submit", function(){
        const form = new FormData(scoreForm);
        const initials = form.get("initials");
        newScore.initials = initials;
        newScore.score = timeLeft;
        scoreHandler(newScore);
        window.open('/scores.html', '_blank')
    })
}

var timeLeft = 75;
var clock = document.getElementById('clock');
var startTimer = function() {
        var timer = setInterval(function() {
            clock.innerHTML(timeLeft--);
            if(timeLeft == 1){
                clearInterval(timer);
                endQuiz();
            };
        }, 1000);
    }

function quizLoop() {
    var shuffledQs = shuffleArray(questions);
    var shuffledEls = shuffleArray(answerEls);
    startTimer();
    for (let i = shuffledQs.length - 1; i > 0; i--) {
            var question = quizQuestion;
            var correct = shuffledEls[0];
            var incorrectUno = shuffledEls[1];
            var incorrectDos = shuffledEls[2];
            question.innerText = shuffledQs[i].question;
            correct.innerText = shuffledQs[i].correct;
            incorrectUno.innerText = shuffledQs[i].incorrectUno;
            incorrectDos.innerText = shuffledQs[i].incorrectDos;
            correct.addEventListener("click", function(){
                correctIn.innerText = "Correct!";
                return
            })
            incorrectUno.addEventListener("click", function(){
                correctIn.innerText = "Incorrect!";
                timeLeft - 10;
                return
            })
            incorrectDos.addEventListener("click", function(){
                correctIn.innerText = "Incorrect!";
                timeLeft - 10;
                return
            })
        };
}

function startGame() {
    quizLoop();
    endQuiz();
}

startGame();
