const angleOfTriangle = document.querySelectorAll(".angle");
const checkButon = document.querySelector("#btn");
const outputArea = document.querySelector(".output");

function checkSumOfAngles(angle1 , angle2 , angle3) {
    const sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles;
}

function isItTriangle(){
 let sumOfAngles = checkSumOfAngles(Number(angleOfTriangle[0].value), Number(angleOfTriangle[1].value), Number(angleOfTriangle[2].value));

 if (sumOfAngles===180) {
    outputArea.innerText = "yay..! This is a Triangle";
 }
 else {
    outputArea.innerText = "It's not a Triangle";
 }
}



checkButon.addEventListener("click",isItTriangle);