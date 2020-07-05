// start @ https://youtu.be/j59qQ7YWLxw?t=1337

// calculator functions
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        // clears everything
        this.clear();
    }
    // clears elements
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    // deletes
    delete(){

    }
    // 
    appendNumber(number){
        // this.currentOperand = number;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    // When user selects operation
    chooseOperation(operation){

    }
    //
    compute(){

    }
    // 
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

// const variables
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// functions for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})