let currentDisplay = ""; //Display number on the calculator
let currentNumber = ""; //Numbers being manipulated behind the scenes
let previousNumber = "";
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
    return (parsed1 / parsed2).toFixed(2);
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
    currentNumber = "";
    previousNumber = "";
    currentDisplay = "";
}

//populates the buttons on calculator

const calculatorButtons = document.querySelectorAll(".calculatorButtons");

let populateCalculator = () => {
    let buttonList = ["AC","", "+/-", "%", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, "", "", "="];
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
let finishedOperation = false;

calculatorButtons.forEach( button => {
    button.addEventListener("click", (e) =>{
        let buttonValue = e.target.getAttribute("id");

        //alert(buttonValue);
        
        if (parseInt(buttonValue) >= 0){ //if button is a number add to display
            if (finishedOperation){
                currentNumber = "";
                finishedOperation = false;
            }
            currentNumber += buttonValue;
            currentDisplay = currentNumber;
            
            //alert(parseInt(buttonValue))

        } else if (buttonValue == "AC") { //if button is AC, clear display
            clear();
            
        } else if (buttonValue == "=" && operator !== ""){ 
            //checks for valid parameters and '=" before calculating"
            currentNumber = operate(operator,previousNumber,currentNumber);
            let tempNumber = currentNumber;
            clear();
            currentNumber = tempNumber;
            currentDisplay = currentNumber;
            finishedOperation = true;
            //alert("computed");
            
        } else if (buttonValue === "x" || buttonValue === "-" || buttonValue === "+" || buttonValue === "%"){
            //checks if button is an operator
            if (currentNumber === ""){
                operator = buttonValue;
            } else if (previousNumber !== "" && operator !== ""){ //if contains previous number and has valid operator, continue to operate
                currentNumber = operate(operator, previousNumber, currentNumber);
                currentDisplay = currentNumber;
            }else if (currentNumber !== ""){
                operator = buttonValue;
                previousNumber = currentNumber;
                currentNumber = "";
            } else {
                alert("something is wrong");
            }
           
            //currentDisplay = currentNumber1;
            //alert(buttonValue);
        } else if (buttonValue === "+/-"){
            currentNumber *= -1;
            currentDisplay = currentNumber;
            updateDisplay;
        }
            else {
            console.log('error message');
        }
        updateDisplay();
    })
})


//logs first number on click
//if another number is selected, add it onto the first number
//if an operation is selected, saves the current number as previous and save current operator
//if an operation is selected instead of compute, will automatically compute and update display
//logs 2nd number on click, saves the previous number
//computes answer and updates display

//