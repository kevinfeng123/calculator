let add = (num1, num2) => {
    return num1 + num2;
}

let subtract = (num1, num2) => {
    return num1 - num2;
}

let multiply = (num1, num2) => {
    return num1 * num2;
}

let divide = (num1, num2) => {
    return num1 / num2;
}

let operate = (operator, num1, num2) => {
    if (operator === "+"){
        return add(num1,num2);
    } else if (operator === "-"){
        return subtract(num1,num2);
    } else if (operator === "*"){
        return multiply(num1,num2);
    } else if (operator === "%"){
        return divide(num1,num2);
    } else {
        alert("invalid operator");
    }
}

