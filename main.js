const questions = [
    {
        question: "Welke planeet staat het dichtst bij de zon?",
        answers: ["Mercurius", "Venus", "Aarde", "Mars"],
        correct: "Mercurius"
    },
    {
        question: "Welke planeet wordt de Rode Planeet genoemd?",
        answers: ["Jupiter", "Mars", "Venus", "Saturnus"],
        correct: "Mars"
    },
    {
        question: "Welke planeet heeft ringen die zichtbaar zijn met een telescoop?",
        answers: ["Saturnus", "Mars", "Venus", "Neptunus"],
        correct: "Saturnus"
    },
    {
        question: "Welke planeet is het grootst in ons zonnestelsel?",
        answers: ["Jupiter", "Saturnus", "Aarde", "Uranus"],
        correct: "Jupiter"
    },
    {
        question: "Op welke planeet leven wij?",
        answers: ["Mars", "Aarde", "Venus", "Mercurius"],
        correct: "Aarde"
    },
    {
        question: "Welke planeet staat bekend als de blauwe planeet?",
        answers: ["Neptunus", "Aarde", "Mars", "Jupiter"],
        correct: "Aarde"
    },
    {
        question: "Welke planeet is het verst van de zon?",
        answers: ["Neptunus", "Mars", "Saturnus", "Mercurius"],
        correct: "Neptunus"
    },
    {
        question: "Welke planeet is bekend om zijn sterke stormen en grote rode vlek?",
        answers: ["Jupiter", "Venus", "Uranus", "Mars"],
        correct: "Jupiter"
    },
    {
        question: "Welke planeet is ongeveer even groot als de aarde maar veel heter?",
        answers: ["Venus", "Mars", "Saturnus", "Neptunus"],
        correct: "Venus"
    },
    {
        question: "Hoe heet onze ster?",
        answers: ["De maan", "De zon", "Mars", "Jupiter"],
        correct: "De zon"
    }
];

const questionNumber = document.getElementById("questionNumber");
const scoreText = document.getElementById("score");
const questionText = document.getElementById("question");
const answersBox = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;
    result.textContent = "";
    nextBtn.style.display = "none";

    const q = questions[currentQuestion];

    questionNumber.textContent = `Vraag ${currentQuestion + 1} van ${questions.length}`;
    scoreText.textContent = `Score: ${score}`;
    questionText.textContent = q.question;

    answersBox.innerHTML = "";

    q.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.textContent = answer;

        button.addEventListener("click", () => checkAnswer(button, answer));

        answersBox.appendChild(button);
    });
}

function checkAnswer(button, answer) {
    if (answered) return;

    answered = true;

    const correctAnswer = questions[currentQuestion].correct;
    const allButtons = document.querySelectorAll(".answer-btn");

    allButtons.forEach(btn => {
        btn.disabled = true;

        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (answer === correctAnswer) {
        score++;
        button.classList.add("correct");
        result.textContent = "Goed gedaan!";
    } else {
        button.classList.add("wrong");
        result.textContent = `Fout. Het juiste antwoord is: ${correctAnswer}`;
    }

    scoreText.textContent = `Score: ${score}`;
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
});

function showFinalResult() {
    questionNumber.textContent = "Quiz klaar";
    scoreText.textContent = `Score: ${score}`;
    questionText.textContent = "Je hebt de quiz afgerond!";
    answersBox.innerHTML = "";
    nextBtn.style.display = "none";

    result.innerHTML = `
        Je eindscore is ${score} van de ${questions.length}.<br><br>
        <button class="next-btn restart-btn" onclick="restartQuiz()">Opnieuw spelen</button>
    `;

    document.querySelector(".restart-btn").style.display = "block";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

loadQuestion();