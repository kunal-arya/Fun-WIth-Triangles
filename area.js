const base = document.querySelector(".base");
const height = document.querySelector(".height");
const checkAreaBtn = document.querySelector("#check-area-btn");
const outputBox = document.querySelector("#area-of-triangle");


function areaOfTriangle() {
    const b = Number(base.value);
    const h = Number(height.value);
    const multiplication = b*h;
    const area = 0.5*multiplication;
   outputBox.innerText = "The area of the triangle is " + area + "cm²"
}


checkAreaBtn.addEventListener("click" , areaOfTriangle)