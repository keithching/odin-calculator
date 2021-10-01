function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return 'Hello World';
    }
    return num1 / num2;
}

function operate(num1, num2, operator) {
    return  operator == 'add' ? add(num1, num2) :
            operator == 'subtract' ? subtract(num1, num2) :
            operator == 'multiply' ? multiply(num1, num2) :
            operator == 'divide' ? divide(num1, num2) :
            'something went wrong...';
}

function display(value) {
    const displayScreen = document.querySelector('.display');
    if (value == '') {
        displayScreen.textContent = 0;
    } else {
        displayScreen.textContent = value;
    }

    // disable the "dot" button if a dot is already present in the display
    if (displayScreen.textContent.includes('.')) {
        document.querySelector('#dot').disabled = true;
    } else {
        document.querySelector('#dot').disabled = false;
    }
}

function setNum1(num) {
    if (num1 && operator != 'equal') {
        num1 = num1 + num.textContent;
        display(num1);
    } else {
        num1 = num.textContent;
        operator = null; // clear the equal value stored in the operator variable
        display(num1);
    }
}
function setNum2(num) {
    if (num2) {
        num2 = num2 + num.textContent;
        display(num2);
    } else {
        num2 = num.textContent;
        display(num2);
    }
}

// initialize the variables
let num1 = null;
let operator = null;
let num2 = null;


// assign values to the number variables and display
const numberBtns = document.querySelectorAll('.numbers');
numberBtns.forEach(numberBtn => numberBtn.addEventListener('click', () => {

    if (num1 && operator != 'equal' && operator) {
        setNum2(numberBtn);
    } else {
        setNum1(numberBtn);
    }

}));


// run operate() if either one of the operators are clicked
const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', () => {
    if (operator && num1 && num2) { 
        // set num1 to be the result of the operation
        num1 = operate(num1, num2, operator);
        display(num1);
        // store a new operator
        operator = operatorBtn.id;
        // clear previously stored num2
        num2 = null;

    } else if (num1) {
        operator = operatorBtn.id;
    }
}));


// remove a digit from either num1 or num2 when DEL button is clicked
function removeDigitFromNum() {
    if (num1 && num2) {
        num2 = num2.slice(0, num2.length - 1);
        display(num2);
    } else if (num1 && typeof num1 == 'string') { // num1 is initially a string (before any arithmetics). this check
                                                  // ensures that the current arithmetic result stored in num1 won't get altered
        num1 = num1.slice(0, num1.length - 1);
        display(num1);
    }
}

const delBtn = document.querySelector('#del');
delBtn.addEventListener('click', () => {
        removeDigitFromNum();
});


// reset all variables and display when AC button is clicked
function reset() {
    num1 = null;
    operator = null;
    num2 = null;
    display('');
}

const acBtn = document.querySelector('#ac');
acBtn.addEventListener('click', () => {
    reset();
});

