function add(num1, num2){
    let output = num1 + num2;
    return (output);
}

function subtract(num1, num2){
    let output = num1 - num2;
    return (output);
}

function multiply(num1, num2){
    let output = num1 * num2;
    return (output);
}

function divide(num1, num2){
    if(num2 === 0){
        alert("You can't divide by zero!")
        return num1
    }
    else
        {let output = num1 / num2;
        return (output);}
}

function operate(num1, num2, operator){
    if (operator === "+"){
        return add(num1, num2);
    }
    else if (operator === "-"){
        return subtract(num1, num2);
    }
    else if (operator === "*"){
        return multiply(num1, num2);
    }
    else if (operator === "/"){
        return divide(num1, num2);
    }
    else{
        console.log("Something went wrong");
    }
}

screen = document.querySelector(".screen");
btn1 = document.querySelector(".btn1");
btn2 = document.querySelector(".btn2");
btn3 = document.querySelector(".btn3");
btn4 = document.querySelector(".btn4");
btn5 = document.querySelector(".btn5");
btn6 = document.querySelector(".btn6");
btn7 = document.querySelector(".btn7");
btn8 = document.querySelector(".btn8");
btn9 = document.querySelector(".btn9");
btn0 = document.querySelector(".btn0");
btnMultiply = document.querySelector(".btnMultiply");
btnDivide = document.querySelector(".btnDivide");
btnAdd = document.querySelector(".btnAdd");
btnSubtract = document.querySelector(".btnSubtract");
btnEquals = document.querySelector(".btnEquals");
btnClear = document.querySelector(".clear");
btnBackspace = document.querySelector(".backspace")

let displayValue = ""

btn1.addEventListener("click", ()=>{
    displayValue += "1";
    updateScreen()})
btn2.addEventListener("click", ()=>{
    displayValue += "2";
    updateScreen()})
btn3.addEventListener("click", ()=>{
    displayValue += "3";
    updateScreen()})
btn4.addEventListener("click", ()=>{
    displayValue += "4";
    updateScreen()})
btn5.addEventListener("click", ()=>{
    displayValue += "5";
    updateScreen()})
btn6.addEventListener("click", ()=>{
    displayValue += "6";
    updateScreen()})
btn7.addEventListener("click", ()=>{
    displayValue += "7";
    updateScreen()})
btn8.addEventListener("click", ()=>{
    displayValue += "8";
    updateScreen()})
btn9.addEventListener("click", ()=>{
    displayValue += "9";
    updateScreen()})
btn0.addEventListener("click", ()=>{
    displayValue += "0";
    updateScreen()})

btnAdd.addEventListener("click", ()=>{
    displayValue += "+";
    disableOperators()
    updateScreen()})
btnSubtract.addEventListener("click", ()=>{
    displayValue += "-";
    disableOperators()
    updateScreen()})
btnMultiply.addEventListener("click", ()=>{
    displayValue += "×";
    disableOperators()
    updateScreen()})
btnDivide.addEventListener("click", ()=>{
    displayValue += "÷"
    disableOperators()
    updateScreen()})

btnEquals.addEventListener("click", () => {
    if (displayValue.includes("+")){
        const array = displayValue.split("+");
        let num1 = Number(array[0]);
        let num2 = Number(array[1]);
        displayValue = operate(num1, num2, "+");
        displayValue = roundLongNum(displayValue);
        displayValue = displayValue.toString();
        updateScreen();
        enableOperators()
    }
    else if (displayValue.includes("-")){
        const array = displayValue.split("-");
        let num1 = Number(array[0]);
        let num2 = Number(array[1]);
        displayValue = operate(num1, num2, "-");
        displayValue = roundLongNum(displayValue);
        displayValue = displayValue.toString();
        updateScreen();
        enableOperators()
    }
    else if (displayValue.includes("×")){
        const array = displayValue.split("×");
        let num1 = Number(array[0]);
        let num2 = Number(array[1]);
        if (array[1] === ""){
            num2 = 1
        }
        displayValue = operate(num1, num2, "*");
        displayValue = roundLongNum(displayValue);
        displayValue = displayValue.toString();
        updateScreen();
        enableOperators()
    }
    else if (displayValue.includes("÷")){
        const array = displayValue.split("÷");
        let num1 = Number(array[0]);
        let num2 = Number(array[1]);
        if (array[1] === ""){
            num2 = 1
        }
        displayValue = operate(num1, num2, "/");
        displayValue = roundLongNum(displayValue);
        displayValue = displayValue.toString();
        updateScreen();
        enableOperators();
    }
})

btnClear.addEventListener("click", () => {
    displayValue = "";
    updateScreen()
})

btnBackspace.addEventListener("click", () => {
    displayValue = displayValue.substring(0, (displayValue.length-1));
    updateScreen();
})


function updateScreen(){
    if (displayValue.length <= 9){
        screen.textContent = displayValue 
    }

}

function disableOperators(){
    btnAdd.disabled  = true
    btnSubtract.disabled  = true
    btnMultiply.disabled  = true
    btnDivide.disabled  = true
}

function enableOperators(){
    btnAdd.disabled  = false
    btnSubtract.disabled  = false
    btnMultiply.disabled  = false
    btnDivide.disabled  = false
}

function roundLongNum(longNum){
    if (longNum.toString().length > 9)
        {const numDigits = Math.round(longNum).toString().length;
        const numDecimals = 8 - numDigits
        const truncatedNum = longNum.toFixed(numDecimals)
        return truncatedNum}
    else{
        return longNum
    }
    }


