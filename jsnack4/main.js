const partecipants = [
    'Jay Gatsby',
    'Nick Carraway',
    'Daisy Buchanan',
    'George Wilson'
]

const nomeUtente = prompt("Inserisci il tuo nome per verificare se sei invitato alla festa del Grande Gatsby:");
let invitato = false;

// Iteriamo la lista degli invitati con un ciclo for
for (let i = 0; i < partecipants.length; i++) {
  if (partecipants[i] === nomeUtente) {
    invitato = true;
    break; // se troviamo il nome dell'utente nella lista, usciamo dal ciclo
  }
}

// Comunichiamo all'utente se è invitato o meno alla festa
if (invitato) {
  alert("Complimenti, sei invitato alla festa del Grande Gatsby!");
} else {
  alert("Spiacente, non sei invitato alla festa del Grande Gatsby.");
}