// Preguntas y respuestas
const questions = [
    {
        question: "¿Como considera al hombre que edificó sobre la roca?",
        options: ["Prudente", "Insensato", "Sordo", "Todas las anteriores"],
        correctAnswer: 0
    },
    {
        question: "¿El hombre insensato en donde construyó?",
        options: ["Cemento", "Roca", "Arena", "Cesped"],
        correctAnswer: 2
    },
    {
        question: "¿Que significa la arena?",
        options: ["Teorias e inventos humanos", "Esfuerzo", "Testimonios", "Ninguna de las anteriores"],
        correctAnswer: 0
    },
    {
        question: "¿Edificar en la roca significa?",
        options: ["Vivir segun los principios de ley", "Que la doctrina de la iglesia este basada en la ley de Dios", "Ninguna de las anteriores", "Todas las anteriores"],
        correctAnswer: 3
    },
    {
        question: "¿La casa es?",
        options: ["La morada en el cielo", "El carácter", "La familia de la fé", "Todas las anteriores"],
        correctAnswer: 1
    },
    {
        question: "¿Que es lo más peligroso?",
        options: ["No oir", "Rechazar", "Oir y no hacer", "Ninguna de las anteriores"],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("nextButton");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.textContent = `${index + 1}. ${option}`;
        optionElement.classList.add("option");
        optionElement.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score += 3;
        resultElement.textContent = "Respuesta Correcta. Ganaste 3 puntos en esta pregunta.";
    } else {
        resultElement.textContent = "Respuesta Incorrecta. No ganaste puntos en esta pregunta.";
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    resultElement.textContent = "";
    nextButton.style.display = "none";

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionElement.textContent = "¡Juego terminado, gracias por participar!";
        optionsElement.innerHTML = '';
        resultElement.textContent = `Puntuación final: ${score}/18 puntos`;
        if (score >= 15) {
            questionElement.textContent = "¡Muy bien hermano, si prestó atencion! Su penitencia será decir un versiculo de memoria";
        }   else if (score <= 9) {
            questionElement.textContent = "¡Que paso hermano, no prestó mucha atencion! Su penitencia será presentar una alabanza";
        } else {
            questionElement.textContent = "¡Se salvó por poco hermano! Su penitencia será decir dos versiculos de memoria";
        }
    }


}

nextButton.addEventListener("click", nextQuestion);

// Comenzar el juego
displayQuestion();
