var answerA = $("#a");
var answerB = $("#b");
var answerC = $("#c");
var question = $("#question");
var count = 75
var scoreForm = $("<form>");
var scoreFormLabel = $("<label>")
                    .attr("for", "initials")
                    .text("Initials:")
var scoreFormInput = $("<input>")
                    .attr("type", "text")
                    .attr("id", "initials")
                    .attr("name", "initials")
var scoreFormSubmit = $("<input>")
                    .attr("type", "submit")
                    .attr("value", "Submit")

var scores = []

var startTimer = function() {
    var timer = setInterval(function() {
        $("#counter").html(count--);
        if(count == 1) clearInterval(timer);
    }, 1000);
}

var questionArray = [
    {
        question: "Which character in an IF statement is used to check if 2 things are NOT EQUAL",
        a: "!",
        b: "?",
        c: "$",
        correctAnswer: "a"
    }
]

var scoreFormGen = function(){
    scoreForm.append(scoreFormLabel);
    scoreForm.append(scoreFormInput);
    scoreForm.append(scoreFormSubmit);
    $("#question-container").addClass("is-hidden");
    $("#main-container").append(scoreForm)
}

var scoreFormHandler = function(){
    scoreFormSubmit.on("submit", function(){
        var scoreTemp = {initials:"", score:""}
        scoreTemp.initials = scoreFormInput.text().trim();
        scoreTemp.score = count;
        scores.push(scoreTemp);
    })
}

var questionLoop = function(){
    for (i = 0; i < questionArray.length; i++) {
        question.text(questionArray[i].question)
        answerA.text(questionArray[i].a);
        answerB.text(questionArray[i].b);
        answerC.text(questionArray[i].c);
        $(".answer-container").on("click", "p", function() {
            if ($(this).attr("id") === questionArray[i].correctAnswer) {
                $(this).addClass("correct")
            }
            else {
                $(this).addClass("incorrect");
                count - 10
        
            }
        })
    }
    scoreFormGen();
}

$(document).ready(function(){
    startTimer();
    questionLoop();
    scoreFormGen();
    scoreFormHandler();
})