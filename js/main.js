
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

let randomNumbers = [];

for (let i = 0; i < 5; i++) {
  let randomNumber = generateRandomNumber();
  randomNumbers.push(randomNumber);
  console.log(randomNumber);  // Stampa in console
}

const numbersDiv = document.getElementById('numbers');

numbersDiv.textContent = 'Numeri generati: ' + randomNumbers.join(', ');

setTimeout(() => {
  // Nasconde i numeri dalla pagina dopo 3 secondi
  numbersDiv.style.display = 'none';
}, 3000);