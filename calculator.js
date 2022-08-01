let currentDisplay = 25; //Display number on the calculator
let currentNumber1 = ""; //Numbers being manipulated behind the scenes
let currentNumber2 = "";
let operator = "";

//basic arithmetic functions
let add = (num1, num2) => {
    let parsed1 = parseInt(num1);
    let parsed2 = parseInt(num2);
    return parsed1 + parsed2;
}

let subtract = (num1, num2) => {
    let parsed1 = parseInt(num1);
    let parsed2 = parseInt(num2);
    return parsed1 - parsed2;
}

let multiply = (num1, num2) => {
    let parsed1 = parseInt(num1);
    let parsed2 = parseInt(num2);
    return parsed1 * parsed2;
}

let divide = (num1, num2) => {
    let parsed1 = parseInt(num1);
    let parsed2 = parseInt(num2);
    return parsed1 / parsed2;
}

let operate = (operator, num1, num2) => {
    if (operator === "+"){
        return add(num1,num2);
    } else if (operator === "-"){
        return subtract(num1,num2);
    } else if (operator === "x"){
        return multiply(num1,num2);
    } else if (operator === "%"){
        return divide(num1,num2);
    } else {
        alert("invalid operator");
    }
}

let clear = () => {
    operator = "";
    currentNumber1 = "";
    currentNumber2 = "";
    currentDisplay = "";
}

//populates the buttons on calculator

const calculatorButtons = document.querySelectorAll(".calculatorButtons");

let populateCalculator = () => {
    let buttonList = ["AC"," ", " ", "%", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, " ", " ", "="];
    let index = 0;
    calculatorButtons.forEach( button => {
        button.setAttribute("id", buttonList[index])
        button.textContent = buttonList[index];
        index++;
        console.log(index);
    })
}

populateCalculator();

//Adds the display number to the calculator display

const calculatorDisplay = document.querySelector("#calculatorDisplay");
const displayNumber = document.createElement("div");

let populateDisplay = () => {
    displayNumber.textContent = currentDisplay;
    displayNumber.className = "displayNumber";
    calculatorDisplay.appendChild(displayNumber);
}

let updateDisplay = () => {
    displayNumber.textContent = currentDisplay;
}

populateDisplay();

//adding event listeners to make buttons function

calculatorButtons.forEach( button => {
    button.addEventListener("click", (e) =>{
        let buttonValue = e.target.getAttribute("id");

        //alert(buttonValue);

        if (parseInt(buttonValue) >= 0){ //if button is a number add to display
            currentNumber1 += buttonValue;
            currentDisplay = currentNumber1;
            //alert(parseInt(buttonValue))
        } else if (buttonValue == "AC") { //if button is AC, clear display
            clear();
            
        } else if (buttonValue == "=" && operator !== "" && currentNumber2 !== ""){ 
            //checks for valid parameters and '=" before calculating"
            currentNumber1 = operate(operator,currentNumber2,currentNumber1);
            currentDisplay = currentNumber1;
            //alert("computed");
            
        } else if (buttonValue !== " "){
            //checks if button is an operator
            operator = buttonValue;
            currentNumber2 = currentNumber1;
            currentNumber1 = "";
            //alert(buttonValue);
        } else {
            alert('error');
        }
        updateDisplay();
    })
})


