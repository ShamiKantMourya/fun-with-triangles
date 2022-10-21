const quizForm = document.querySelector(".quiz");
const submitButton = document.querySelector("#btn");
const outputArea = document.querySelector("#output");

const quizAnswers = ["90°","right angle","one right angle","85°","45°"];


function totalScore(){
    let score = 0;
    let index = 0;
    const formResult =  new FormData(quizForm);
    for (const value of formResult.values) {
        if (value===quizAnswers[index]) {
            score = score+1;
        }
        index+1;
    }
}
outputArea.innerText = "Your total score is : " + score;




submitButton.addEventListener('click', quizResult)
