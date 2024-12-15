document.addEventListener('DOMContentLoaded', async () => {
    const quizDiv = document.getElementById('quiz');
    const nextButton = document.getElementById('nextQuestion');
    const scoreDiv = document.getElementById('score');
    const scoreValueSpan = document.getElementById('scoreValue');
    const totalQuestionsSpan = document.getElementById('totalQuestions');
    const restartButton = document.getElementById('restartQuiz');

    // Fetch random 10 questions from server
    const res = await fetch('http://localhost:5000/api/quiz/questions');
    const questions = await res.json();

    let currentQuestionIndex = 0; // Tracks current question
    let score = 0;

    // Function to display a question
    const displayQuestion = () => {
        quizDiv.innerHTML = '';
        const question = questions[currentQuestionIndex];

        const div = document.createElement('div');
        div.innerHTML = `
            <p>${currentQuestionIndex + 1}. ${question.question}</p>
            ${question.options.map(opt => `
                <label>
                    <input type="radio" name="answer" value="${opt}" />
                    ${opt}
                </label>
            `).join('<br>')}
        `;
        quizDiv.appendChild(div);
        nextButton.style.display = 'block'; // Show Next button
    };

    // Show the first question initially
    displayQuestion();

    // Handle next button click
    nextButton.addEventListener('click', () => {
        const selectedOption = document.querySelector(`input[name="answer"]:checked`);
        if (!selectedOption) {
            alert('Please select an answer!');
            return;
        }

        // Check if the selected answer is correct
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;

        // If all questions are answered, show the score
        if (currentQuestionIndex >= questions.length) {
            quizDiv.style.display = 'none';
            nextButton.style.display = 'none';
            scoreDiv.style.display = 'block';
            scoreValueSpan.textContent = score;
            totalQuestionsSpan.textContent = questions.length;
            clearInterval(timer); // Stop timer
        } else {
            // Display the next question
            displayQuestion();
        }
    });

    // Restart Quiz
    restartButton.addEventListener('click', () => {
        window.location.reload(); // Reload the page to restart
    });
});
