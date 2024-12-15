let time = 180; // Total time in seconds (3 minutes)
const timerElement = document.getElementById('timer');
const nextButton = document.getElementById('nextQuestion');
const quizDiv = document.getElementById('quiz');
const scoreDiv = document.getElementById('score');

const timer = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    time--;

    if (time < 0) {
        clearInterval(timer);

        // Automatically end quiz when time runs out
        alert("Time's up! Submitting your quiz...");
        quizDiv.style.display = 'none';
        nextButton.style.display = 'none';
        scoreDiv.style.display = 'block';
        document.getElementById('scoreValue').textContent = 0;
        document.getElementById('totalQuestions').textContent = 10;
    }
}, 1000);
