

let currentScore = 0;
let highScore = parseInt(localStorage.getItem('highScore')) || 0;

let randomClicksRemaining = 10;
let hintClicksRemaining = 15;

const flagContainer = document.querySelector('.flag-container');
const flagNameElement = document.getElementById('flag-name');
const guessInput = document.getElementById('guess-input');
const randomFlagBtn = document.getElementById('random-flag-btn');
const submitGuessBtn = document.getElementById('submit-guess');
const resultMessage = document.getElementById('result-message');
const currentScoreSpan = document.getElementById('current-score');
const highScoreSpan = document.getElementById('high-score');
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const hintBtn = document.getElementById('hint');

// Navigation menu variables
const menuBtn = document.querySelector(".menu-btn");
const insideMenu = document.querySelector(".inside-menu");
const closeBtn = document.querySelector(".close-btn");

// Button variables (updated)
let resetGameBtn = document.querySelector("#reset-game");
let resetHighScoresBtn = document.querySelector("#reset-high-scores");
let changeBackgroundBtn = document.querySelector("#change-background");

// Update button variables for inside menu
insideMenuResetGameBtn = document.querySelector(".inside-menu #reset-game");
insideMenuResetHighScoresBtn = document.querySelector(".inside-menu #reset-high-scores");
insideMenuChangeBackgroundBtn = document.querySelector(".inside-menu #change-background");










 

const countries = [
    { name: "Uganda", flag: "./asserts/Africa/Uganda.svg" },
    { name: "Kenya", flag: "./asserts/Africa/Kenya.svg" },
    { name: "Tanzania", flag: "./asserts/Africa/Tanzania.svg"},
    { name: "Algeria", flag: "./asserts/Africa/Algeria.svg"},
    { name: "Angola", flag: "./asserts/Africa/Angola.svg"},
    { name: "Benin", flag: "./asserts/Africa/Benin.svg"},
    { name: "Botswana", flag: "./asserts/Africa/Botswana.svg"},
    { name: "Burkina Faso", flag: "./asserts/Africa/Burkina Faso.svg"},
    { name: "Burundi", flag: "./asserts/Africa/Burundi.svg"},
    { name: "Cameroon", flag: "./asserts/Africa/Cameroon.svg"},
    { name: "Central African Republic", flag: "./asserts/Africa/Central African Republic.svg"},
    { name: "Chad", flag: "./asserts/Africa/Chad.svg"},
    { name: "Comoros", flag: "./asserts/Africa/Comoros.svg"},
    { name: "Côte d'Ivoire", flag: "./asserts/Africa/Côte d'Ivoire.svg"},
    { name: "Democratic Republic of Congo", flag: "./asserts/Africa/Democratic Republic of Congo.svg"},
    { name: "Djibouti", flag: "./asserts/Africa/Djibouti.svg"},
    { name: "East African Community", flag: "./asserts/Africa/East African Community.svg"},
    { name: "Egypt", flag: "./asserts/Africa/Egypt.svg"},
    { name: "Equatorial Guinea", flag: "./asserts/Africa/Equatorial Guinea.svg"},
    { name: "Eritrea", flag: "./asserts/Africa/Eritrea.svg"},
    { name: "Eswatini", flag: "./asserts/Africa/Eswatini.svg"},
    { name: "Ethiopia", flag: "./asserts/Africa/Ethiopia.svg"},
    { name: "Gabon", flag: "./asserts/Africa/Gabon.svg"},
    { name: "Gambia", flag: "./asserts/Africa/Gambia.svg"},
    { name: "Ghana", flag: "./asserts/Africa/Ghana.svg"},
    { name: "Guinea", flag: "./asserts/Africa/Guinea.svg"},
    { name: "Guinea-Bissau", flag: "./asserts/Africa/Guinea-Bissau.svg"},
    { name: "Lesotho", flag: "./asserts/Africa/Lesotho.svg"},
    { name: "Liberia", flag: "./asserts/Africa/Liberia.svg"},
    { name: "Libya", flag: "./asserts/Africa/Libya.svg"},
    { name: "Madagascar", flag: "./asserts/Africa/Madagascar.svg"},
    { name: "Malawi", flag: "./asserts/Africa/Malawi.svg"},
    { name: "Mali", flag: "./asserts/Africa/Mali.svg"},
    { name: "Mauritania", flag: "./asserts/Africa/Mauritania.svg"},
    { name: "Mauritius", flag: "./asserts/Africa/Mauritius.svg"},
    { name: "Morocco", flag: "./asserts/Africa/Morocco.svg"},
    { name: "Mozambique", flag: "./asserts/Africa/Mozambique.svg"},
    { name: "Namibia", flag: "./asserts/Africa/Namibia.svg"},
    { name: "Niger", flag: "./asserts/Africa/Niger.svg"},
    { name: "Nigeria", flag: "./asserts/Africa/Nigeria.svg"},
    { name: "Republic of the Congo", flag: "./asserts/Africa/Republic of the Congo.svg"},
    { name: "Rwanda", flag: "./asserts/Africa/Rwanda.svg"},
    { name: "Senegal", flag: "./asserts/Africa/Senegal.svg"},
    { name: "Sierra Leone", flag: "./asserts/Africa/Sierra Leone.svg"},
    { name: "Somalia", flag: "./asserts/Africa/Somalia.svg"},
    { name: "South Africa", flag: "./asserts/Africa/South Africa.svg"},
    { name: "South Sudan", flag: "./asserts/Africa/South Sudan.svg"},
    { name: "Sudan", flag: "./asserts/Africa/Sudan.svg"},
    { name: "Togo", flag: "./asserts/Africa/Togo.svg"},
    { name: "Tunisia", flag: "./asserts/Africa/Tunisia.svg"},
    { name: "Western Sahara", flag: "./asserts/Africa/Western Sahara.svg"},
    { name: "Zambia", flag: "./asserts/Africa/Zambia.svg"},
    { name: "Zimbabwe", flag: "./asserts/Africa/Zimbabwe.svg"},
    
    
 
  ];

  




  // const flagContainer = document.querySelector(".flag-container");
  // const randomFlagBtn = document.getElementById("random-flag-btn");
  // const flagNameElement = document.getElementById("flag-name");
  
 

  flagContainer.style.margin = "0 auto";
//   randomFlagBtn.style.margin = "0 auto";
// randomFlagBtn.style.display = "block";



let currentFlagIndex = 0;

// Initialize high scores array
let highScores = [];

// Retrieve saved high scores
const savedHighScores = JSON.parse(localStorage.getItem("highScores"));
if (savedHighScores) {
  highScores = savedHighScores;
}

// Function to update high scores
function updateHighScores(newScore) {
  highScores.push({ name: 'Player', score: newScore });
  highScores.sort((a, b) => b.score - a.score);
  highScores = highScores.slice(0, 10); // Keep only top 10 scores

  // Store updated high scores
  localStorage.setItem("highScores", JSON.stringify(highScores));
  localStorage.setItem('highScore', newScore);
}

// Function to display high scores
function displayHighScores() {
  const highScoresList = document.getElementById("high-score");
  highScoresList.innerHTML = `High Score: ${highScore}`;

  highScores.forEach((score) => {
    const scoreElement = document.createElement("li");
    scoreElement.textContent = `${score.name}: ${score.score}`;
    highScoresList.appendChild(scoreElement);
  });
}

// Function to display flag
function displayFlag() {
  const flag = countries[currentFlagIndex];
  flagContainer.innerHTML = `<img src="${flag.flag}" alt="${flag.name} flag">`;
  flagNameElement.innerText = '';
}

// Function to update score
function updateScore() {
  currentScoreSpan.innerText = `Score: ${currentScore}`;
  if (currentScore > highScore) {
    highScore = currentScore;
    updateHighScores(highScore);
    highScoreSpan.innerText = `High Score: ${highScore}`;
  }
}

// Function to get random index
function getRandomIndex() {
  let newIndex = Math.floor(Math.random() * countries.length);
  while (newIndex === currentFlagIndex) {
    newIndex = Math.floor(Math.random() * countries.length);
  }
  return newIndex;
}

// randomFlagBtn.addEventListener('click', () => {
//   currentFlagIndex = getRandomIndex();
//   displayFlag();
// });

submitGuessBtn.addEventListener('click', () => {
  const userGuess = guessInput.value.trim();
  const currentFlagName = countries[currentFlagIndex].name;
  if (userGuess.toLowerCase() === currentFlagName.toLowerCase()) {
    currentScore++;
    updateScore();
    resultMessage.innerText = 'Correct!';
    displayFlag();
  } else {
    resultMessage.innerText = `Incorrect. The correct answer is ${currentFlagName}.`;
    displayFlag();
  }
  guessInput.value = '';
  currentFlagIndex = getRandomIndex();
  displayFlag();
});


resetGameBtn.addEventListener('click', () => {
  currentScore = 0;
  updateScore();
  resultMessage.innerText = '';
  currentFlagIndex = getRandomIndex();
  displayFlag();
  randomClicksRemaining = 10; // Reset random clicks
  document.getElementById('random-clicks-remaining').innerText = randomClicksRemaining;

  randomFlagBtn.disabled = false; // Re-enable the button

  hintClicksRemaining = 15; // Reset hint clicks
  document.getElementById('hint-clicks-remaining').innerText = hintClicksRemaining;
  hintBtn.disabled = false; // Re-enable the hint button

});


resetHighScoresBtn.addEventListener('click', () => {
  localStorage.removeItem('highScores');
  localStorage.removeItem('highScore');
  highScores = [];
  highScore = 0;
  displayHighScores();
  updateScore();
});

guessInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    submitGuessBtn.click();
  }
});

// Add event listener to change background button


const colors = ["white","#aa7a7a28", "#54609728", "#28282928", "#33a1fb28", "#f1fb3328", "white"];

let colorIndex = 0;

changeBackgroundBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

/*changeBackgroundBtn.addEventListener('click', () => {
  const backgroundOptions = [ 
    { name: 'Default', className: ' ' },
    { name: 'Dark', className: 'background-dark' },
    { name: 'Grey', className: 'background-grey' },
    { name: 'Blue', className: 'background-blue' },
  ];

  const backgroundSelect = prompt(`Select background:
    ${backgroundOptions.map((option, index) => `${index + 1}. ${option.name}`).join('\n')}`);

  const selectedBackground = backgroundOptions[backgroundSelect - 1];
  document.body.classList.add(selectedBackground.className);
});*/

// randomCounterElement.innerText = `Random: ${randomClicksRemaining}`;

randomFlagBtn.addEventListener('click', () => {
  if (randomClicksRemaining > 0) {
    currentFlagIndex = getRandomIndex();
    displayFlag();
    randomClicksRemaining--;
    document.getElementById('random-clicks-remaining').innerText = randomClicksRemaining;

  } else {
    resultMessage.innerText = 'Random clicks limit reached!';
    randomFlagBtn.disabled = true; // Disable the button
  }
});

// Add event listener to hint button
hintBtn.addEventListener('click', () => {
  // const currentFlagName = countries[currentFlagIndex].name;
  // const firstLetter = currentFlagName.charAt(0); // Get the first letter
  
 
  //  // Display the hint
  //  resultMessage.innerText = `Hint: ${firstLetter}`;
  const countryName = countries[currentFlagIndex].name;
const hint = countryName.substring(0,2);
//Display the hint
resultMessage.innerText = `Hint: ${hint}`;

  hintClicksRemaining--;
  document.getElementById('hint-clicks-remaining').innerText = hintClicksRemaining;
  
  if (hintClicksRemaining <= 0) {
    hintBtn.disabled = true;
  }

  
  // Optional: Limit hint usage
  // hintClicksRemaining--;
  // if (hintClicksRemaining <= 0) {
  //   hintBtn.disabled = true;
  // }
});

// Add event listener to menu button
menuBtn.addEventListener("click", () => {
  insideMenu.classList.toggle("open");
});


// Close inside menu on close button click
closeBtn.addEventListener("click", () => {
  insideMenu.classList.remove("open");
});


insideMenuResetGameBtn.addEventListener("click", () => {
  resetGameBtn.click();
});

insideMenuResetHighScoresBtn.addEventListener("click", () => {
  resetHighScoresBtn.click();
});

insideMenuChangeBackgroundBtn.addEventListener("click", () => {
  changeBackgroundBtn.click();
});






displayFlag();
displayHighScores();



