const aValue = document.querySelector("#a-value");
const bValue = document.querySelector("#b-value");
const checkButton = document.querySelector("#check-hypotenuse")
const outputBox = document.querySelector("#hypo-output")

function lengthOfHypotenuse() {
   const a = Number(aValue.value);
   const aSquare = a*a;
   const b = Number(bValue.value);
   const bSquare = b*b;
   const sumOfSquareNumbers = aSquare + bSquare;
   const hypotenuseLength = Math.sqrt(sumOfSquareNumbers);
   outputBox.innerText = "The Length of Hypotenuse is " + hypotenuseLength + " cm" }


checkButton.addEventListener("click" , lengthOfHypotenuse )