let answerPercentage = [false, false, false, false, false, false];
function correctAnswer(questionNumber) {
    answerPercentage[questionNumber-1] = true;
}
function wrongAnswer(questionNumber) {
    answerPercentage[questionNumber-1] = false;
}
function submit() {
    let correctAnswers = 0;
    for(let i = 0; i < 6; i++) {
        if(answerPercentage[i] == true) {
            correctAnswers += 1;
        }
    }
    document.getElementById("remark").textContent = "You got " + correctAnswers + " out of 6 Answers Correct.";
}
