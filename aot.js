const inputArea = document.querySelectorAll(".input");
const findArea = document.querySelector("#btn");
const outputArea = document.querySelector("#output");

function areaOfTriangle(height , breadth) {
    const area = 1/2*height*breadth
    return area;
}
function calculateArea (){
 const area = areaOfTriangle(Number(inputArea[0].value),Number(inputArea[1].value));
 outputArea.innerText = "Area of triangle is " + area;
}

findArea.addEventListener("click", calculateArea)