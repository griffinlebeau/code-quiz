const list = document.getElementById('score-list');
const scores = JSON.parse(localStorage.getItem("scores"));

function generateScores(score) {
    const li = document.createElement('li');
    li.innerHTML = score.initials + "" + score.score;
    list.appendChild(li);
}

scores.sort(function(a, b){
    return b.z - a.z 
});

scores.forEach(generateScores)
