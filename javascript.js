const questions = [
    {
      question: "¿En qué año comenzó la Primera Guerra Mundial?",
      answers: ["1914", "1939", "1918", "1945"],
      correctAnswer: "1914"
    },
    {
      question: "¿Quién fue el primer presidente de los Estados Unidos?",
      answers: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
      correctAnswer: "George Washington"
    },
    {
      question: "¿Qué civilización construyó las pirámides de Giza?",
      answers: ["Romanos", "Egipcios", "Mayas", "Griegos"],
      correctAnswer: "Egipcios"
    },
    {
      question: "¿En qué año se descubrió América?",
      answers: ["1492", "1512", "1400", "1520"],
      correctAnswer: "1492"
    },
    {
      question: "¿Quién escribió la Ilíada?",
      answers: ["Homero", "Sócrates", "Platón", "Aristóteles"],
      correctAnswer: "Homero"
    },
    {
        question: "¿Quien fue el segundo presidente de Nicaragua",
        answers: ["Homero", "Sócrates", "Platón", "Aristóteles"],
        correctAnswer: ""
      }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.onclick = () => checkAnswer(answer);
      answersDiv.appendChild(button);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const resultMessage = document.getElementById('resultMessage');
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      resultMessage.textContent = "¡Correcto!";
      resultMessage.style.color = "green";
      score++;
    } else {
      resultMessage.textContent = "Incorrecto. La respuesta correcta era: " + currentQuestion.correctAnswer;
      resultMessage.style.color = "red";
    }
  
    document.getElementById('next-button').style.display = 'block';
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= questions.length) {
      showFinalScore();
    } else {
      loadQuestion();
      document.getElementById('resultMessage').textContent = '';
      document.getElementById('next-button').style.display = 'none';
    }
  }
  
  function showFinalScore() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = `Juego terminado. Puntuación final: ${score}/${questions.length}`;
    resultMessage.style.color = "blue";
  }
  
  // Cargar la primera pregunta al iniciar el juego
  loadQuestion();
  