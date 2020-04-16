let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll('.square');
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const header = document.querySelector('h1');
const resetBtn = document.querySelector('#reset');
const modeBtns = document.querySelectorAll('.mode');

init();

function init() {
  // node buttons event listeners
  setUpModeButtons();

  setUpSquares();

  reset();
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    // add click listeners to squares
    // eslint-disable-next-line no-loop-func
    squares[i].addEventListener('click', function() {
      console.log('clicked te square');
      // grab color of clicked square
      const clickedColor = this.style.backgroundColor;
      // compare color to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct';
        resetBtn.textContent = 'Play again?';
        changeColors(clickedColor);
        header.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try again';
      }
    });
  }
}

function setUpModeButtons() {
  for (let i = 0; i < modeBtns.length; i++) {
    // eslint-disable-next-line no-loop-func
    modeBtns[i].addEventListener('click', function() {
      modeBtns[0].classList.remove('selected');
      modeBtns[1].classList.remove('selected');
      this.classList.add('selected');
      // figure out how many squares o show
      this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function reset() {
  messageDisplay.textContent = '';
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = 'New Colors';
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  header.style.backgroundColor = 'steelblue';
}

resetBtn.addEventListener('click', reset);
function changeColors(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
  // make an arary
  const arr = [];
  // add num random colors to array
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
    // get random color nd push into array
  }
  // return that arary
  return arr;
}

function randomColor() {
  // pick red from 0 to 255
  const r = Math.floor(Math.random() * 256);

  // pick green from 0 to 255
  const g = Math.floor(Math.random() * 256);

  // pick blue from 0 to 255
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
