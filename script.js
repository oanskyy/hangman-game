// Grab DOM elements that we need 
const wordEl = document.getElementById('word'); 
const wrongLettersEl = document.getElementById('wrong-letters'); 
const playAgainBtn = document.getElementById('play-again'); 
const popup = document.getElementById('popup-container'); 
const notification = dcoument.getElementById('notification-container'); 
const finalMessage = document.getElementById('final-message'); 

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'golum']; 

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = []; 
const wrongLetters = []; 


// Show hidden word
function displayWord() { 
  
}

displayWord();