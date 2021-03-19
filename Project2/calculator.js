const numberButtons =  document.querySelectorAll('.num');
const operationButtons = document.querySelectorAll('.operation');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.equals');
const result = document.querySelector('.result');

/*for (i = 0; i < numberButtons.length; i++) {
	console.log(numberButtons[i].textContent);
  numberButtons[i].addEventListener('click', () => {

  	console.log(numberButtons[i].innerText);
  });
} */
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
  	numberClicked(button.innerText);
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
  	operationClicked(button.innerText);
  })
})

equalsButton.addEventListener('click', () => {
	equalsClicked();
})

clearButton.addEventListener('click', () => {
	clear();
})

deleteButton.addEventListener('click', () => {
	deleteClicked();
})

let operation = "";
let answer = 0;
let input = 0;

function numberClicked(number){
	input = input*10 + parseFloat(number);
	result.innerText = input;
}

function operationClicked(op){
	if (input != 0) {
		answer = input;
		input = 0;
	}
	operation = op;
	result.innerText = "";
}

function deleteClicked() {
	if (input != 0) {
		input = Math.floor(input / 10);
		result.innerText = input;
	}
	
}

function equalsClicked() {
    switch (operation) {
	  case '+':
	  	answer = answer + input;
	    break;
	  case '÷':
	  	answer = answer / input;
	    break;
	  case '*':
	  	answer = answer * input;
	    break;
	  case '-':
	  	answer = answer - input;
	    break;
	  default:
	  	return
	}
	result.innerText = answer;
	input = 0;
 }



function clear() {
	answer = 0;
	input = 0;
	result.innerText = 0;
}

function del() {

}

