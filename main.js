function add(num1, num2){
    let output = num1 + num2;
    console.log(output);
    return (output);
}

function subtract(num1, num2){
    let output = num1 - num2;
    console.log(output);
    return (output);
}

function multiply(num1, num2){
    let output = num1 * num2;
    console.log(output);
    return (output);
}

function divide(num1, num2){
    let output = num1 / num2;
    console.log(output);
    return (output);
}

function operate(num1, num2, operator){
    if (operator === "+"){
        add(num1, num2);
    }
    else if (operator === "-"){
        subtract(num1, num2);
    }
    else if (operator === "*"){
        multiply(num1, num2);
    }
    else if (operator === "/"){
        divide(num1, num2);
    }
    else{
        console.log("Something went wrong")
    }
}

screen = document.querySelector(".screen")
btn1 = document.querySelector(".btn1")
btn2 = document.querySelector(".btn2")
btn3 = document.querySelector(".btn3")
btn4 = document.querySelector(".btn4")
btn5 = document.querySelector(".btn5")
btn6 = document.querySelector(".btn6")
btn7 = document.querySelector(".btn7")
btn8 = document.querySelector(".btn8")
btn9 = document.querySelector(".btn9")
btn0 = document.querySelector(".btn0")

let displayValue = ""

btn1.addEventListener("click", ()=>{
    displayValue += "1"
    updateScreen()})
btn2.addEventListener("click", ()=>{
    displayValue += "2"
    updateScreen()})
btn3.addEventListener("click", ()=>{
    displayValue += "3"
    updateScreen()})
btn4.addEventListener("click", ()=>{
    displayValue += "4"
    updateScreen()})
btn5.addEventListener("click", ()=>{
    displayValue += "5"
    updateScreen()})
btn6.addEventListener("click", ()=>{
    displayValue += "6"
    updateScreen()})
btn7.addEventListener("click", ()=>{
    displayValue += "7"
    updateScreen()})
btn8.addEventListener("click", ()=>{
    displayValue += "8"
    updateScreen()})
btn9.addEventListener("click", ()=>{
    displayValue += "9"
    updateScreen()})
btn0.addEventListener("click", ()=>{
    displayValue += "0"
    updateScreen()})

function updateScreen(){
screen.textContent = displayValue
}




