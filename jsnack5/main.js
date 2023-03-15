let evenNumbers = '';
console.log(evenNumbers);


let i = 0;

for (let i = 0; i < 5; i++) {
    let numberInput = Number(prompt('inserisci un numero'));
    
    if (numberInput % 2 === 0) {

       evenNumbers += numberInput + '\n';
    }
}

console.log(evenNumbers);


let j = 0

while (j < 5) {
    let numberInput = Number(prompt('inserisci un numero'));
    
    if (numberInput % 2 === 0) {

       evenNumbers += numberInput + '\n';
    }
    
    j++
    
}
console.log(evenNumbers);
