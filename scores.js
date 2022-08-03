const list = document.getElementById('score-list');
const scores = JSON.parse(localStorage.getItem("scores"));

function generateScores(score) {
    const li = document.createElement('li');
    li.innerHTML = score.initials + "-" + score.score;
    li.setAttribute("class", "block");
    list.appendChild(li);
}

scores.sort((a, b) => b.score-a.score);

scores.forEach(generateScores)
console.log(scores)


