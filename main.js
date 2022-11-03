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

