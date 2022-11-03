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

const screen = document.querySelector(".screen");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn0 = document.querySelector(".btn0");
const btnDecimal = document.querySelector(".decimal");
const btnMultiply = document.querySelector(".btnMultiply");
const btnDivide = document.querySelector(".btnDivide");
const btnAdd = document.querySelector(".btnAdd");
const btnSubtract = document.querySelector(".btnSubtract");
const btnEquals = document.querySelector(".btnEquals");
const btnClear = document.querySelector(".clear");
const btnBackspace = document.querySelector(".backspace")

let displayValue = ""

btn1.addEventListener("click", press1)
btn2.addEventListener("click", press2)
btn3.addEventListener("click", press3)
btn4.addEventListener("click", press4)
btn5.addEventListener("click", press5)
btn6.addEventListener("click", press6)
btn7.addEventListener("click", press7)
btn8.addEventListener("click", press8)
btn9.addEventListener("click", press9)
btn0.addEventListener("click", press0)

btnDecimal.addEventListener("click", pressDecimal)

btnAdd.addEventListener("click", pressAdd)
btnSubtract.addEventListener("click", pressSubtract)
btnMultiply.addEventListener("click", pressMultiply)
btnDivide.addEventListener("click", pressDivide)

btnEquals.addEventListener("click", pressEquals)

btnClear.addEventListener("click", pressClear)

btnBackspace.addEventListener("click", pressBackspace)


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
    btnAdd.disabled  = false;
    btnSubtract.disabled  = false;
    btnMultiply.disabled  = false;
    btnDivide.disabled  = false;
    btnDecimal.disabled = false;

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

function press1(){
    displayValue += "1";
    updateScreen()}

function press2(){
    displayValue += "2";
    updateScreen()}

function press3(){
    displayValue += "3";
    updateScreen()}

function press4(){
    displayValue += "4";
    updateScreen()}

function press5(){
    displayValue += "5";
    updateScreen()}

function press6(){
    displayValue += "6";
    updateScreen()}

function press7(){
    displayValue += "7";
    updateScreen()}

function press8(){
    displayValue += "8";
    updateScreen()}

function press9(){
    displayValue += "9";
    updateScreen()}

function press0(){
    displayValue += "0";
    updateScreen()}

function pressDecimal(){
    displayValue += ".";
    btnDecimal.disabled = true;
    updateScreen()
}

function pressAdd(){
    displayValue += "+";
    btnDecimal.disabled = false
    disableOperators()
    updateScreen()}

function pressSubtract(){
    displayValue += "-";
    btnDecimal.disabled = false
    disableOperators()
    updateScreen()}

function pressMultiply(){
    displayValue += "×";
    btnDecimal.disabled = false
    disableOperators()
    updateScreen()}

function pressDivide(){
    displayValue += "÷"
    btnDecimal.disabled = false
    disableOperators()
    updateScreen()}

function pressEquals(){
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
}

function pressClear(){
    displayValue = "";
    updateScreen()
    enableOperators()
}

function pressBackspace(){
    if(displayValue[displayValue.length-1] === "."){
        btnDecimal.disabled = false
    }
    displayValue = displayValue.substring(0, (displayValue.length-1));
    updateScreen();
}
    

    

document.addEventListener("keyup", (e) =>{
    if (e.key === "1"){
        press1()
        }
    else if (e.key === "2"){
        press2()
        }
    else if (e.key === "3"){
        press3()
        }
    else if (e.key === "4"){
        press4()
        }
    else if (e.key === "5"){
        press5()
        }
    else if (e.key === "6"){
        press6()
        }
    else if (e.key === "7"){
        press7()
        }
    else if (e.key === "8"){
        press8()
        }
    else if (e.key === "9"){
        press9()
        }
    else if (e.key === "0"){
        press0()
        }
    else if (e.key === "."){
        pressDecimal()
        }
    else if (e.key === "+"){
        pressAdd()
        }
    else if (e.key === "-"){
        pressSubtract()
        }
    else if (e.key === "x" || e.key ==="*"){
        pressMultiply()
        }
    else if (e.key === "/"){
        pressDivide()}
    else if (e.key === "=" || e.key === "Enter"){
        pressEquals()
        }
    else if (e.key === "Backspace"){
        pressBackspace()
        }
    else if (e.key === "c"){
        pressClear()
        }
    })