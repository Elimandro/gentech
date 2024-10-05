document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result');

    // Lista de preguntas de selección múltiple
    const questions = [
        { question: "¿Cuánto es 8 + 5?", answer: 13, options: [12, 13, 14, 15] },
        { question: "¿Cuánto es 12 - 7?", answer: 5, options: [3, 4, 5, 6] },
        { question: "¿Cuánto es 6 * 3?", answer: 18, options: [16, 18, 20, 21] },
        { question: "¿Cuánto es 16 / 4?", answer: 4, options: [2, 3, 4, 5] },
        { question: "¿Cuánto es 9 + 14?", answer: 23, options: [20, 21, 22, 23] },
        { question: "¿Cuánto es 19 - 9?", answer: 10, options: [8, 9, 10, 11] },
        { question: "¿Cuánto es 7 * 4?", answer: 28, options: [25, 28, 30, 32] },
        { question: "¿Cuánto es 18 / 2?", answer: 9, options: [8, 9, 10, 11] },
        { question: "¿Cuánto es 13 + 6?", answer: 19, options: [18, 19, 20, 21] },
        { question: "¿Cuánto es 15 - 8?", answer: 7, options: [6, 7, 8, 9] }
    ];

    // Renderiza las preguntas con animación
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.style.animationDelay = `${index * 0.2}s`;  // Añade retraso a las preguntas
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${question.options.map((option, i) => `
                <label>
                    <input type="radio" name="question-${index}" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });

    submitBtn.addEventListener('click', function () {
        let score = 0;
        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selectedOption && parseInt(selectedOption.value) === question.answer) {
                score++;
            }
        });
        resultContainer.textContent = `Tu puntuación es: ${score} de ${questions.length}`;
    });
});
