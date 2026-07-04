const correctAnswers = {
    q1: "Mercurius",
    q2: "Mars",
    q3: "Saturnus",
    q4: "Jupiter",
    q5: "Aarde",
    q6: "Venus",
    q7: "Neptunus",
    q8: "Jupiter",
    q9: "Jupiter",
    q10: "8"
};

const form = document.getElementById("quizForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    let total = Object.keys(correctAnswers).length;

    for (let question in correctAnswers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);

        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }

    result.textContent = `Je score is ${score} van de ${total}.`;
});