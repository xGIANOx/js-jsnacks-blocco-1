const partecipants = [
    'Jay Gatsby',
    'Nick Carraway',
    'Daisy Buchanan',
    'George Wilson'
]

const buttonEL = document.querySelector('button');

const nameEl = document.getElementById('name');

// aggiungo evento al click

buttonEL.addEventListener('click', function() {

  const name = nameEl.value;

  console.log(name)

  if (!partecipants.includes(name)) {

    alert('You are not authorized to partecipate')
    
  } else {
    alert('You\'re welcome!')

  }

})