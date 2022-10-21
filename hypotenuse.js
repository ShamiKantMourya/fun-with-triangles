const input = document.querySelectorAll(".input");
const checkButton = document.querySelector("#btn");
const outputArea = document.querySelector("#output");

function squareOfInputs(height , breadth) {
    const sumOfSquares = height**2 + breadth**2;
    return sumOfSquares;
}
function findHypotenuse(){
  const sumOfSquares = squareOfInputs(Number(input[0].value), Number(input[1].value));
  const hypotenuseValue = Math.sqrt(sumOfSquares);
  outputArea.innerText = "The Hypotenuse of Triangle is " + hypotenuseValue;
}
checkButton.addEventListener("click",findHypotenuse)