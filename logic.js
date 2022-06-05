var questionArray = []

var questionOne = {
    question: "question",
    correct: "correct",
    incorrectOne: "incorrect",
    incorrectTwo: "incorrect",
    incorrectThree: "incorrect",
}

var questionTwo = {
    question: "question",
    correct: "correct",
    incorrectOne: "incorrect",
    incorrectTwo: "incorrect",
    incorrectThree: "incorrect",
}

var questionThree = {
    question: "question",
    correct: "correct",
    incorrectOne: "incorrect",
    incorrectTwo: "incorrect",
    incorrectThree: "incorrect",
}

var questionFour = {
    question: "question",
    correct: "correct",
    incorrectOne: "incorrect",
    incorrectTwo: "incorrect",
    incorrectThree: "incorrect",
}

var questionFive = {
    question: "question",
    correct: "correct",
    incorrectOne: "incorrect",
    incorrectTwo: "incorrect",
    incorrectThree: "incorrect",
}

questionArray[0] = questionOne;
questionArray[1] = questionTwo;
questionArray[2] = questionThree;
questionArray[3] = questionFour;
questionArray[4] = questionFive;

console.log(questionOne.correct);

var shuffle = function (questionArray) {
    let currentIndex = questionArray.length, randomIndex;
    while (currentIndex !=0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [questionArray[currentIndex], questionArray[randomIndex]] = 
        [questionArray[randomIndex], questionArray[currentIndex]];
    }
    return questionArray;
}

var startQuiz = function(questionArray) {
    //declare and remove intro elements
    var introJumbo = document.getElementById("#intro-h3");
    introJumbo.remove;
    var introText = document.getElementById("#intro-p");
    introText.remove;
    //create question text and answer option buttons
    var questionText = document.createElement("h2");
    var introCard = document.getElementById("#intro-card");
        introCard.appendChild(questionText);
    var buttonOne = document.createElement("button");
        buttonOne.setAttribute("id", "buttonOne");
        introCard.appendChild(buttonOne);
    var buttonTwo = document.createElement("button");
        buttonTwo.setAttribute("id", "buttonTwo");
        introCard.appendChild(buttonTwo);
    var buttonThree = document.createElement("button");
        buttonThree.setAttribute("id", "buttonThree");
        introCard.appendChild(buttonThree);
    var buttonFour = document.createElement("button");
        buttonFour.setAttribute("id", "buttonFour");
        introCard.appendChild(buttonFour);

    

}