// Preguntas y respuestas
const questions = [
    {
        question: "1) ¿Qué construyó el dueño de la viña en su propiedad?",
        options: ["Un castillo", "Una torre", "Un estanque", "Un templo"],
        correctAnswer: 1
    },
    {
        question: "2) ¿Qué hizo el dueño de la viña después de plantarla y construir las instalaciones?        ",
        options: ["La regaló", "La vendió", "La alquiló a viñadores", "La abandonó"],
        correctAnswer: 2
    },
    {
        question: "3) ¿Cómo trataron los viñadores a los sirvientes que el dueño envió para recoger el fruto?",
        options: ["Los ignoraron", "Los recibieron con regalos", "Los atacaron y maltrataron", "Huyeron de ellos"],
        correctAnswer: 2
    },
    {
        question: "4) ¿A quién decide enviar el dueño de la viña después de que los viñadores maltrataran a sus sirvientes?",
        options: ["A su esposa", "A su primo", "A su amigo", "A su hijo"],
        correctAnswer: 3
    },
    {
        question: "5) ¿Qué hicieron los viñadores cuando el dueño envió a su hijo?",
        options: ["Lo asesinaron", " Lo invitaron a una fiesta", "Lo adoraron", "Hicieron una alianza con él"],
        correctAnswer: 0
    },
    {
        question: "6) ¿Cuál fue la razón de los viñadores para matar al hijo del dueño de la viña?",
        options: ["Querían vengarse", "Creían que era un ladrón", "Pensaron que era un impostor", "Querían apoderarse de la herencia"],
        correctAnswer: 3
    },
    {
        question: "7) ¿Cómo reaccionaron los oyentes de la parábola cuando Jesús les preguntó qué haría el dueño de la viña con los viñadores?",
        options: [" Se rieron", "Dijeron que el dueño destruiría a los viñadores malvados", " No entendieron la pregunta", "Sugirieron que el dueño debería perdonarlos"],
        correctAnswer: 1
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
    if (currentQuestion.correctAnswer === selectedIndex && !currentQuestion.answered) {
        score += 3;
        resultElement.textContent = "Respuesta Correcta. Ganaste 3 puntos en esta pregunta.";
        document.querySelectorAll('.option')[selectedIndex].classList.add('correct-answer');
    } else if (!currentQuestion.answered) {
        resultElement.textContent = "Respuesta Incorrecta. No ganaste puntos en esta pregunta.";
        document.querySelectorAll('.option')[currentQuestion.correctAnswer].classList.add('correct-answer');
        document.querySelectorAll('.option')[selectedIndex].classList.add('incorrect-answer');
    }

    currentQuestion.answered = true;
    nextButton.style.display = "block";
    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
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
        resultElement.textContent = `Puntuación final: ${score}/24 puntos`;
        if (score >= 21) {
            questionElement.textContent = "¡Muy bien hermano, si prestó atencion! Su participación será presentar una alabanza";
        }   else if (score <= 15 ) {
            questionElement.textContent = "¡Que paso hermano, no prestó mucha atencion! Su participacióm será presentar una alabanza";
        } else {
            questionElement.textContent = "¡Se salvó por poco hermano! Su participación será presentar una alabanza";
        }
    }
}

nextButton.addEventListener("click", nextQuestion);

// Comenzar el juego
displayQuestion();
