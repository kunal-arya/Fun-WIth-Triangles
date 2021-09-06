const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const checkButton = document.querySelector("#check-button")
const OutputBox = document.querySelector("#output")


function isThisATriangle() {
    const sum = Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
    console.log(sum)
    if ( sum === 180) {
    OutputBox.innerText = "It is a Triangle"
    } else {
    OutputBox.innerText = "It is Not a Triangle"
    }
}


checkButton.addEventListener( "click" , isThisATriangle);
