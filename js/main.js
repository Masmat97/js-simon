
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

let randomNumbers = [];

for (let i = 0; i < 5; i++) {
  let randomNumber = generateRandomNumber();
  randomNumbers.push(randomNumber);
  console.log(randomNumber); // Stampa in console
}

const numbersDiv = document.getElementById('numbers');
numbersDiv.textContent = 'Numeri generati: ' + randomNumbers.join(', ');

setTimeout(() => {
  numbersDiv.style.display = 'none'; // Nasconde i numeri dalla pagina
  
  // Chiede all'utente di inserire 5 numeri
  let userNumbers = [];
  while (userNumbers.length < 5) {
      let userInput = prompt("Inserisci un numero:");
      let parsedInput = parseInt(userInput);
      if (!isNaN(parsedInput)) { // Verifica che l'input sia un numero
          userNumbers.push(parsedInput);
      } else {
          alert("Per favore inserisci un numero valido.");
      }
  }

  // Stampa l'array dei numeri dell'utente in console
  console.log("Numeri inseriti dall'utente:", userNumbers);

  let matches = randomNumbers.filter(value => userNumbers.includes(value));
  console.log("Numeri indovinati:", matches.length > 0 ? matches.join(', ') : "Nessuno");

}, 3000);