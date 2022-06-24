
var questionArray = [
    {
        question: "Which character in an IF statement is used to check if 2 things are NOT EQUAL",
        a: "!",
        b: "?",
        c: "$",
        correctAnswer: "a"
    }
]

var scores = []



var generateQuestionEl = function(questionArray) {
    var main = $("<div>").addClass("quiz-container")
    var question = $("<h5>").text(questionArray[i].question)
    var answerA = $("<p>").text(questionArray[i].a).attr("id", "a");
    var answerB = $("<p>").text(questionArray[i].b).attr("id", "b");
    var answerC = $("<p>").text(questionArray[i].c).attr("id", "c");
    $(".main-container").append(main);
    main.append(question);
    main.append(answerA);
    main.append(answerB);
    main.append(answerC);
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
}

$(".start-btn").on("click", function() {
    $(".intro-container").addClass("is-hidden");
    var count = 75
    var timer = setInterval(function() {
        $("#counter").html(count--);
        if(count == 1) clearInterval(timer);
    }, 1000);
    while (count > 1) {
        for (i = 0; i < questionArray.length; i++) {
            generateQuestionEl(questionArray[i]);
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
        endQuiz(count)
    }
    endQuiz(count)

})




