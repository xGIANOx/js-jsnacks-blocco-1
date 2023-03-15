/*let total = 0;

for (let i = 1; i <= 10; i++) {
  let number = parseInt(prompt("Inserisci il " + i + "° numero:"));
  total += number;
}

console.log("La somma di tutti i numeri inseriti è: " + total);
*/

// con while loop


let total = 0;

let j = 0

while (j <  10) {
  
  let number = parseInt(prompt("Inserisci il " + j + "° numero:"));
  total += number;
  
  j++
}

console.log("La somma di tutti i numeri inseriti è: " + total);