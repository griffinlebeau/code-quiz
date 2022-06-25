

var scores = []

var main = $("<div>").addClass("quiz-container");
var question = $("<h5>");
var answerA = $("<p>").attr("id", "a");
var answerB = $("<p>").attr("id", "b");
var answerC = $("<p>").attr("id", "c");

var generateQuestionEl = function(){
    main.append(question);
    main.append(answerA);
    main.append(answerB);
    main.append(answerC);
    $(".main-container").append(main);
}




var endQuiz = function() {
    $(".quiz-container").addClass("is-hidden");
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
    scoreForm.append(scoreFormLabel);
    scoreForm.append(scoreFormInput);
    scoreForm.append(scoreFormSubmit);
    $(".main-container").append(scoreForm);
    scoreFormSubmit.on("submit", function() {
        var scoreTemp = {initials:"", score:""}
        scoreTemp.initials = scoreFormInput.text().trim();
        scoreTemp.score = count;
        scores.push(scoreTemp);
        saveScores(scores);

    })
}

var displayScores = function() {
    scoreForm.addClass("is-hidden");
    var scoresList = $("<ol>")
    $(".main-container").append(scoresList);
    localStorage.getItem("scores");
    for (i = 0; i< scores.length; i++){
        var scoreItem = $("<li>").text(scores[i].initials + "" + scores[i].score);
        scoresList.append(scoreItem);
    }
    $("<button>").on("click", function(){
        scoresList.addClass("is-hidden");
        $(".intro-container").removeClass("is-hidden");
    })
}

var count = 75

var startTimer = function() {
    var timer = setInterval(function() {
        $("#counter").html(count--);
        if(count == 1) clearInterval(timer);
    }, 1000);
}

//var questionLoop = function(questionArray){
    for (i = 0; i < questionArray.length; i++) {
        question.text(questionArray[i].question)
        answerA.text(questionArray[i].a);
        answerB.text(questionArray[i].b);
        answerC.text(questionArray[i].c);
        $(".answer-container").on("click", "p", function() {
            if ($(this).attr("id") === questionArray[i].correctAnswer) {
                $(this).addClass("correct")
                return
            }
            else {
                $(this).addClass("incorrect");
                count - 10
                return
        
            }
        })
    }
}

$(".start-btn").on("click", function() {
    $(".intro-container").addClass("is-hidden");
    startTimer();
    generateQuestionEl();
    while (count > 1) {
        questionLoop(questionArray);
    }
    endQuiz(count)

})




