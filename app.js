// Selectors
const boxes = document.querySelectorAll('.box');
let currentPlayer = 'playerX';

// Functions
function displayLetter (e){
 const array = Array.from(boxes);
 const index = array.indexOf(e.target); 

 if(currentPlayer === 'playerX'){
     boxes[index].classList.add('playerX');
 }
 
};

// Click Events
boxes.forEach(box => box.addEventListener('click', displayLetter));