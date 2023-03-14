let total = 0;

for (let i = 1; i <= 10; i++) {
  let number = parseInt(prompt("Inserisci il " + i + "° numero:"));
  total += number;
}

console.log("La somma di tutti i numeri inseriti è: " + total);

