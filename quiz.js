const quickForm = document.querySelector(".quiz-form");

const CheckBtn = document.querySelector("#submit-answer");

const outputBox = document.querySelector("#output");

const correctAnswers = [
    "90°", "Equilateral triangle", "right angled", "one right angle", "12, 16, 20", "100°", "30°", "a + b + c", "no",  "45°"
]

function calculateAns(){
    let score = 0;
    let index = 0;
    const quizResults = new FormData(quickForm);
    for(let value of quizResults.values()){
        if( value === correctAnswers[index]){
            score = score + 1
        }
        index = index + 1
    }
    outputBox.innerText = "Your Score is " + score
}

CheckBtn.addEventListener("click" , calculateAns )