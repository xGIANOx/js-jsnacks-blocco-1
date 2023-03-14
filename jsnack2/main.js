let primaParola = prompt("Inserisci la prima parola:");
let secondaParola = prompt("Inserisci la seconda parola:");

if (primaParola.length < secondaParola.length) {
  console.log(primaParola);
  console.log(secondaParola);
} else if (secondaParola.length < primaParola.length) {
  console.log(secondaParola);
  console.log(primaParola);
} else {
  console.log("Le parole hanno la stessa lunghezza.");
}
