const acBtn = document.querySelector("#ac-btn");

const plusMinusBtn = document.querySelector("#plus-minus-btn");

const slashBtn = document.querySelector("#slash-btn");

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

const zeroBtn = document.querySelector("#zero-btn");

const decimalBtn = document.querySelector("#decimal-btn");

const equalsBtn = document.querySelector("#equals-btn");

const displayText = document.querySelector("#display-text");

decimalBtn.addEventListener('click', () => {
    for (i = 0; i < displayText.textContent; i++) {
        if (displayText.textContent[i] == ".") {
            return;
        }
    }
    addCharacter(".");
})

zeroBtn.addEventListener('click', () => {
    addCharacter(0);
})

oneBtn.addEventListener('click', () => {
    addCharacter(1);
})

twoBtn.addEventListener('click', () => {
    addCharacter(2);
})

threeBtn.addEventListener('click', () => {
    addCharacter(3);
})

fourBtn.addEventListener('click', () => {
    addCharacter(4);
})

fiveBtn.addEventListener('click', () => {
    addCharacter(5);
})

sixBtn.addEventListener('click', () => {
    addCharacter(6);
})

sevenBtn.addEventListener('click', () => {
    addCharacter(7);
})

eightBtn.addEventListener('click', () => {
    addCharacter(8);
})

nineBtn.addEventListener('click', () => {
    addCharacter(9);
})


plusBtn.addEventListener('click', () => {
    operate(plusBtn);
})

minusBtn.addEventListener('click', () => {
    operate(minusBtn);
})

multiplicationBtn.addEventListener('click', () => {
    operate(multiplicationBtn);
})

slashBtn.addEventListener('click', () => {
    operate(slashBtn);
})

function addCharacter(input) {
    if(operator == "") {
        displayText.textContent += input;
    }
    else if (operator != "" && displayText.textContent != "") {
        numberOperatorArray.push(operator);

        displayText.textContent = "";

        operator = "";

        displayText.textContent += input;
    }
}

document.addEventListener('keydown', (event) => {
    if (event.code == "Digit0" || event.code == "Digit1" || event.code == "Digit2" || event.code == "Digit3" || event.code == "Digit4" || event.code == "Digit5" || event.code == "Digit6" || event.code == "Digit7" || event.code == "Digit8" || event.code == "Digit9") {
        addCharacter(event["key"]);
    }
    else if (event.code == "NumpadDecimal") {
        for (i = 0; i < displayText.textContent; i++) {
            if (displayText.textContent[i] == ".") {
                return;
            }
        }
        addCharacter(".");
    }
    else if (event.code == "Backspace") {
        displayText.textContent = displayText.textContent.slice(0, -1);
    }
    else if (event.code == "Slash") {
        event.preventDefault();
        operate(slashBtn);
    }
    else if (event.code == "NumpadDivide") {
        operate(slashBtn);
    }
    else if (event.code == "NumpadAdd") {
        operate(plusBtn);
    }
    else if (event.code == "NumpadSubtract") {
        operate(minusBtn);
    }
    else if (event.code == "NumpadMultiply") {
        operate(multiplicationBtn);
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

let numberOperatorArray = [];

function substraction(num1, num2) {
    return num1 - num2;
}

function multiplication (num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

let operator = "";

equalsBtn.addEventListener('click', () => {
    if(numberOperatorArray.length >= 2 && operator == "") {
        numberOperatorArray.push(displayText.textContent);
        equalsFunction();
        displayText.textContent = numberOperatorArray[0];
        numberOperatorArray = [];
    }
    else {
        alert('oopsie');
    }
})

function equalsFunction() {
    if (numberOperatorArray[1] == "+") {
        let result = addition(+numberOperatorArray[0], +numberOperatorArray[2]);

        numberOperatorArray = [`${Math.round(result * 100) / 100}`]
     }
     if (numberOperatorArray[1] == "-") {
         let result = substraction(+numberOperatorArray[0], +numberOperatorArray[2]);

         numberOperatorArray = [`${Math.round(result * 100) / 100}`]
     }
     if (numberOperatorArray[1] == "*") {
         let result = multiplication(+numberOperatorArray[0], +numberOperatorArray[2]);

         numberOperatorArray = [`${Math.round(result * 100) / 100}`]
     }
     if (numberOperatorArray[1] == "/") {
         let result = division(+numberOperatorArray[0], +numberOperatorArray[2]);

         numberOperatorArray = [`${Math.round(result * 100) / 100}`]
     }
}

function operate(operatorBtn) {
    if(displayText.textContent == "") {
        alert('error');
    }
        if(operator == "") {
            numberOperatorArray.push(displayText.textContent);

            operator = operatorBtn.textContent;

            if (numberOperatorArray.length == 3) {
                equalsFunction();
                displayText.textContent = numberOperatorArray[0];
            }
        }
        else {
            operator = operatorBtn.textContent;
        }
}
