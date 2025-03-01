let num1, num2, operator, correctAnswer, score = 0, timeLeft, timer;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    let operators = ["+", "-", "*"];
    operator = operators[Math.floor(Math.random() * operators.length)];
    
    correctAnswer = eval(`${num1} ${operator} ${num2}`);
    document.getElementById("question").innerText = `What is ${num1} ${operator} ${num2}?`;
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("feedback").innerText = "✅ Correct!";
        document.getElementById("score").innerText = score;
        resetTimer();
    } else {
        document.getElementById("feedback").innerText = "❌ Try again!";
    }
    
    document.getElementById("answer").value = ""; // Clear input field
    generateQuestion();
}

function startGame() {
    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("feedback").innerText = "";
    document.getElementById("answer").value = "";
    generateQuestion();
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById("timer").innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            document.getElementById("feedback").innerText = "⏳ Time Up! Score reset to 0.";
            score = 0; // Reset score
            document.getElementById("score").innerText = score;
        }
    }, 1000);
}
