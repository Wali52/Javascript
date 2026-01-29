const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: 1
    },
    {
        question: "Which language is used for web scripting?",
        options: ["PHP", "JavaScript", "C++", "All of these"],
        answer: 3
    },
    {
        question: "Inside which HTML tag do we put JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        answer: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "**"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const progressEl = document.getElementById("progress");

function loadQuestion() {
    let q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    optionButtons.forEach((btn, index) => {
        btn.textContent = q.options[index];
    });

    progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector(".quiz-container").innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} / ${quizData.length}</p>
        <p>Thank you for attempting the quiz.</p>
    `;
}

loadQuestion();
