let num1 = prompt("Inserisci il primo numero:");
let num2 = prompt("Inserisci il secondo numero:");

if (num1 > num2) {
  console.log("Il numero maggiore è " + num1);
} else if (num2 > num1) {
  console.log("Il numero maggiore è " + num2);
} else {
  console.log("I numeri sono uguali.");
}