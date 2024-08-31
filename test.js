document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timerDisplay');
    const questionDisplay = document.getElementById('questionDisplay');
    const questionIndicator = document.getElementById('questionIndicator');
    const feedbackSection = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedbackText');
    
    const questions = [
        { id: 1, text: 'What is 2 + 2?', type: 'multipleChoice', options: ['3', '4', '5'], correctAnswer: '4' },
        { id: 2, text: 'Describe the process of photosynthesis.', type: 'essay', correctAnswer: '' },
        // Add more sample questions as needed
    ];
    
    let currentQuestionIndex = 0;
    let timer;
    
    const updateQuestion = () => {
        const question = questions[currentQuestionIndex];
        questionDisplay.innerHTML = '';
        
        if (question) {
            questionDisplay.innerHTML = `<p>${question.text}</p>`;
            
            if (question.type === 'multipleChoice') {
                question.options.forEach(option => {
                    questionDisplay.innerHTML += `
                        <label>
                            <input type="radio" name="question-${question.id}" value="${option}"> ${option}
                        </label><br>
                    `;
                });
            } else if (question.type === 'essay') {
                questionDisplay.innerHTML += `<textarea name="question-${question.id}" rows="4"></textarea>`;
            }
        }
        
        questionIndicator.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    };
    
    const startTimer = (minutes) => {
        let time = minutes * 60;
        
        timer = setInterval(() => {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (time <= 0) {
                clearInterval(timer);
                alert('Time is up!');
            }
            
            time--;
        }, 1000);
    };
    
    const navigateQuestion = (direction) => {
        if (currentQuestionIndex + direction >= 0 && currentQuestionIndex + direction < questions.length) {
            currentQuestionIndex += direction;
            updateQuestion();
        }
    };
    
    const saveProgress = () => {
        alert('Progress saved.');
        // Implement save progress logic here
    };
    
    const submitAssessment = () => {
        alert('Assessment submitted.');
        // Implement submit assessment logic here
        feedbackSection.style.display = 'block';
        feedbackText.textContent = 'Thank you for completing the assessment. Your responses have been submitted.';
    };
    
    // Initialize the page
    updateQuestion();
    startTimer(10); // 10 minutes timer
});
