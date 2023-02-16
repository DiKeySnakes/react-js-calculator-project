import React, { useState, useEffect } from 'react';

function Calculator() {
  const [previousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
  const [operation, setOperation] = useState(undefined);
  const [previousOperandDisplay, setPreviousOperandDisplay] = useState('');
  const [currentOperandDisplay, setCurrentOperandDisplay] = useState('0');

  const clear = () => {
    setCurrentOperand('');
    setPreviousOperand('');
    setOperation(undefined);
  };

  const deleteNumber = () => {
    const temp = currentOperand;
    const tempResult = temp.toString().slice(0, -1);
    setCurrentOperand(tempResult);
  };

  const appendNumber = (number) => {
    if (number === '.' && currentOperand.includes('.')) return;
    if (number === '+/-') {
      setCurrentOperand((currentOperand * -1).toString());
    }
    setCurrentOperand(currentOperand.toString() + number.toString());
  };

  const chooseOperation = (operation) => {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
      compute();
    }
    setOperation(operation);
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
  };

  const compute = () => {
    let computation;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(previous) || isNaN(current)) return;
    if (operation === '/' && currentOperand === '0') {
      alert("You can't divide by 0!");
      return;
    }
    switch (operation) {
      case '+':
        computation = previous + current;
        break;
      case '-':
        computation = previous - current;
        break;
      case '*':
        computation = previous * current;
        break;
      case '/':
        computation = previous / current;
        break;
      default:
        return;
    }
    setCurrentOperand(computation);
    setOperation(undefined);
    setPreviousOperand('');
  };

  const getDisplayNumber = (number) => {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  };

  const updateDisplay = () => {
    setCurrentOperandDisplay(getDisplayNumber(currentOperand));
    if (operation != null) {
      setPreviousOperandDisplay(
        `${getDisplayNumber(previousOperand)} ${operation}`
      );
    } else {
      setPreviousOperandDisplay('');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', enableKeyboardInput);
  });

  const numClickHandler = (e) => {
    const value = e.target.innerHTML;
    appendNumber(value);
    updateDisplay();
  };

  const opClickHandler = (e) => {
    const value = e.target.innerHTML;
    chooseOperation(value);
    updateDisplay();
  };

  const equalsClickHandler = () => {
    compute();
    updateDisplay();
  };

  const allClearClickHandler = () => {
    clear();
    updateDisplay();
  };

  const deleteNumberClickHandler = () => {
    deleteNumber();
    updateDisplay();
  };

  function enableKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
      appendNumber(e.key);
      updateDisplay();
    }
    if (e.key === '.') {
      appendNumber(e.key);
      updateDisplay();
    }
    if (e.key === '=' || e.key === 'Enter') {
      compute();
      updateDisplay();
    }
    if (e.key === 'Backspace') {
      deleteNumber();
      updateDisplay();
    }
    if (e.key === 'Escape') {
      clear();
      updateDisplay();
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
      chooseOperation(e.key);
      updateDisplay();
    }
  }

  return (
    <div className='container-fluid'>
      <div className='container calculator-area mx-auto justify-content-center border border-primary'>
        <div className='row'>
          <div
            data-previous-operand=''
            type='text'
            className='border border-primary form-control-sm text-end previous-operand shadow'
            disabled=''
          />
          {previousOperandDisplay}
        </div>
        <div className='row'>
          <div
            id='display'
            data-current-operand=''
            type='text'
            className='border border-primary form-control-lg col text-end current-operand shadow'
            disabled=''>
            {currentOperandDisplay}
          </div>
        </div>
        <div className='row'>
          <button
            onClick={deleteNumberClickHandler}
            data-delete=''
            type='button'
            className='btn btn-outline-danger delete col shadow'
            value='delete'>
            DELETE
          </button>
          <button
            onClick={allClearClickHandler}
            id='clear'
            data-all-clear=''
            type='button'
            className='btn btn-outline-danger reset col shadow'
            value='reset'>
            RESET
          </button>
        </div>
        <div className='row'>
          <button
            onClick={numClickHandler}
            id='seven'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={7}>
            7
          </button>
          <button
            onClick={numClickHandler}
            id='eight'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={8}>
            8
          </button>
          <button
            onClick={numClickHandler}
            id='nine'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={9}>
            9
          </button>
          <button
            onClick={opClickHandler}
            id='divide'
            data-operation=''
            type='button'
            className='btn btn-outline-primary col shadow'
            value='/'>
            /
          </button>
        </div>
        <div className='row'>
          <button
            onClick={numClickHandler}
            id='four'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={4}>
            4
          </button>
          <button
            onClick={numClickHandler}
            id='five'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={5}>
            5
          </button>
          <button
            onClick={numClickHandler}
            id='six'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={6}>
            6
          </button>
          <button
            onClick={opClickHandler}
            id='multiply'
            data-operation=''
            type='button'
            className='btn btn-outline-primary col shadow'
            value='*'>
            *
          </button>
        </div>
        <div className='row'>
          <button
            onClick={numClickHandler}
            id='one'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={1}>
            1
          </button>
          <button
            onClick={numClickHandler}
            id='two'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={2}>
            2
          </button>
          <button
            onClick={numClickHandler}
            id='three'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={3}>
            3
          </button>
          <button
            onClick={opClickHandler}
            id='subtract'
            data-operation=''
            type='button'
            className='btn btn-outline-primary col shadow'
            value='-'>
            -
          </button>
        </div>
        <div className='row'>
          <button
            onClick={numClickHandler}
            id='decimal'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value='.'>
            .
          </button>
          <button
            onClick={numClickHandler}
            id='zero'
            data-number=''
            type='button'
            className='btn btn-outline-secondary col shadow'
            value={0}>
            0
          </button>
          <button
            onClick={equalsClickHandler}
            id='equals'
            data-equals=''
            type='button'
            className='btn btn-outline-success col shadow'
            value='='>
            =
          </button>
          <button
            onClick={opClickHandler}
            id='add'
            data-operation=''
            type='button'
            className='btn btn-outline-primary col shadow'
            value='+'>
            +
          </button>
        </div>
        <div className='row' />
      </div>
    </div>
  );
}

export default Calculator;
