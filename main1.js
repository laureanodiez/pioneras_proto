document.addEventListener("DOMContentLoaded", () => {
  const questionBox = document.getElementById("question-box");
  const questionText = document.getElementById("question-text");
  const answerInput = document.getElementById("answer-input");
  const submitAnswer = document.getElementById("submit-answer");
  const stamp = document.getElementById("stamp");

  // Lista de preguntas y respuestas
  const questions = [
    { question: "¿Qué forma tiene la nieve?", answer: "cristales" },
    { question: "¿Cuál es el color de la nieve?", answer: "blanco" },
    { question: "¿Qué estación tiene nieve?", answer: "invierno" },
    { question: "¿La nieve es fría?", answer: "sí" },
    { question: "¿La nieve cae del cielo?", answer: "sí" },
  ];

  let currentQuestionIndex = 0;

  // Mostrar la primera pregunta
  const showQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      questionText.textContent = questions[currentQuestionIndex].question;
      questionBox.style.display = "block";
    } else {
      endQuiz();
    }
  };

  // Validar la respuesta
  submitAnswer.addEventListener("click", () => {
    const userAnswer = answerInput.value.toLowerCase().trim();
    if (userAnswer === questions[currentQuestionIndex].answer) {
      currentQuestionIndex++;
      answerInput.value = ""; // Limpiar input
      showQuestion();
    } else {
      alert("Respuesta incorrecta. Intenta de nuevo.");
    }
  });

  // Finalizar el cuestionario
  const endQuiz = () => {
    questionBox.style.display = "none";
    stamp.style.opacity = 1;
    stamp.style.transform = "scale(1.2) translate(-10px, -10px)";
    setTimeout(() => {
      stamp.style.transform = "scale(1)";
    }, 1000);
  };

  // Detectar marcador y activar la nieve
  const marker = document.querySelector("a-marker");
  marker.addEventListener("markerFound", () => {
    console.log("¡Marcador detectado!");
    showQuestion();
  });
});