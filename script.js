const acBtn = document.querySelector("#ac-btn");

const plusMinusBtn = document.querySelector("#plus-minus-btn");

/*const slashBtn = document.querySelector("#slash-btn");

const sevenBtn = document.querySelector("#seven-btn");

const eightBtn = document.querySelector("#eight-btn");

const nineBtn = document.querySelector("#nine-btn");

const multiplicationBtn = document.querySelector("#multiplication-btn");

const fourBtn = document.querySelector("#four-btn");

const fiveBtn = document.querySelector("#five-btn");

const sixBtn = document.querySelector("#six-btn");

const minusBtn = document.querySelector("#minus-btn");

const oneBtn = document.querySelector("#one-btn");

const twoBtn = document.querySelector("#two-btn");

const threeBtn = document.querySelector("#three-btn");

const plusBtn = document.querySelector("#plus-btn");

const zeroBtn = document.querySelector("#zero-btn");*/

const decimalBtn = document.querySelector("#decimal-btn");

const equalsBtn = document.querySelector("#equals-btn");

const displayText = document.querySelector("#display-text");

const numberBtn = document.querySelectorAll(".number");

numberBtn.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        addCharacter(numButton.textContent);
    })
})

function addCharacter(input) {
    displayText.textContent += input;
}

document.addEventListener('keydown', (event) => {
    if (event.code == "Digit0" || event.code == "Digit1" || event.code == "Digit2" || event.code == "Digit3" || event.code == "Digit4" || event.code == "Digit5" || event.code == "Digit6" || event.code == "Digit7" || event.code == "Digit8" || event.code == "Digit9") {
        addCharacter(event["key"]);
    }
    else if (event.code == "Backspace") {
        displayText.textContent = displayText.textContent.slice(0, -1);
    }
})

acBtn.addEventListener('click', () => {
    displayText.textContent = "";
})

plusMinusBtn.addEventListener('click', () => {
    if (displayText.textContent[0] != "-") {
        displayText.textContent = "-" + displayText.textContent
    }
    else {
        displayText.textContent = displayText.textContent.slice(1);
    }
})

function addition(num1, num2) {
    return num1 + num2;
} 

function substraction(num1, num2) {
    return num1 - num2;
}

function multiplication (num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}