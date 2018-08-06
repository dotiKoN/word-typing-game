window.addEventListener("load", init);

// Global variables

// Available difficulty modes

const difficulty = {
  easy: 6,
  medium: 4,
  hard: 2
};

// To change difficulty

const currentDifficulty = difficulty.medium;

let time = currentDifficulty;
let score = 0;
let isPlaying;

// DOM

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Dictionary TO CHANGE

const words = [
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero"
];

// Start Game

function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentDifficulty;
  // Load a word from an array
  showWord(words);

  // Start matching word input

  wordInput.addEventListener("input", startMatch);

  // Call countdown every sec
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentDifficulty + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // If score is -1 then display 0

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "Type faster!";
    return false;
  }
}

// Show random word

function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer

function countdown() {
  // Check if time has not run out yet
  if (time > 0) {
    // Decrease time
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
    score = -1;
  }
}
