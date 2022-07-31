var questions = [
    {
        question: "What is an anonymous function?",
        correct: "test",
        incorrectUno: "test",
        incorrectDos: "test"
    },
    {
        question: "Which method will be used to convert data prior to being sent to local storage?",
        correct: "test",
        incorrectUno: "test",
        incorrectDos: "test"
    },
    {
        question: "What does JSON stand for?",
        correct: "test",
        incorrectUno: "test",
        incorrectDos: "test"
    },
    {
        question: "How much padding will be applied to the left side of an element with this class: 'padding: 25px 50px 75px 100px'?",
        correct: "test",
        incorrectUno: "test",
        incorrectDos: "test"
    },
    {
        question: "Which HTML tag is used to embed an image in a webpage?",
        correct: "test",
        incorrectUno: "test",
        incorrectDos: "test"
    },
    {
        question: "Which of these is NOT a way to declare a variable?",
        correct: "test",
        incorrectUno: "test",
        incorrectDos: "test"
    },
    {
        question: "What does OOP stand for?",
        correct: "test",
        incorrectUno: "test",
        incorrectDos: "test"
    },
    {
        question: "What is the name of the most widely used Javascript package manager?",
        correct: "test",
        incorrectUno: "test",
        incorrectDos: "test"
    },
    {
        question: "Which symbol is used to assign a value to a variable?",
        correct: "test",
        incorrectUno: "test",
        incorrectDos: "test"
    },
    {
        question: "Which of these is not a Boolean data type?",
        correct: "test",
        incorrectUno: "test",
        incorrectDos: "test"
    }
];

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
        var timer = setInterval(function(){
            var clockTime = JSON.stringify(timeLeft--);
            clock.innerHTML = clockTime;
            if(timeLeft == 1){
                clearInterval(timer);
                endQuiz();
            };
        }, 1000);
    }

const questionHandler = question => {
    var shuffledEls = shuffleArray(answerEls);
    console.log(answerEls);
    var prompt = quizQuestion;
    var correct = shuffledEls[0];
    var incorrectUno = shuffledEls[1];
    var incorrectDos = shuffledEls[2];
    prompt.innerHTML = question.question;
    correct.innerHTML = question.correct;
    incorrectUno.innerHTML = question.incorrectUno;
    incorrectDos.innerHTML = question.incorrectDos;
    quizList.addEventListener("click", function(evt){
        if (evt.target === correct){
            correctIn.innerText = "Correct!"; 
        } else {
            correctIn.innerText = "Incorrect!";
            timeLeft -= 10
        }
});
    };


function quizLoop() {
    var shuffledQs = shuffleArray(questions);
    startTimer();
    shuffledQs.forEach(question => {
        questionHandler(question);
        console.log(question)
    });
    //for (let i = 0; i < shuffledQs.length; i++) {
            //questionHandler(shuffledQs[i]);
            //await quizList.addEventListener("click", function(evt){
                    //if (evt.target === correct){
                        //correctIn.innerText = "Correct!"; 
                    //}
                    //else if (evt.target === incorrectUno){
                        //correctIn.innerText = "Incorrect!";
                        //timeLeft -= 10
                    //}
                    //else {
                        //correctIn.innerText = "Incorrect!";
                        //timeLeft -= 10
                    //}
            //});
            //console.log(shuffledQs[i]);
        //};
    }
            
function startGame() {
    quizLoop();
    endQuiz();
}

startGame();
