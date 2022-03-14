console.log('JS Ok')


// Crea due array che hanno un numero di elementi diversi
// Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà tanti quanto l'altro



// Crea due array che hanno un numero di elementi diversi

const primo = [3, 'pippo', 6, 2, false];

const secondo = [2, 3, 'pippo', 6, true, '2', false, 8, 12];

let minore;
let maggiore;

if(primo.lenght < secondo.length) {
    minore = primo;
    maggiore = secondo;
} else {
    minore = secondo;
    maggiore = primo;
} 


while(minore.length < maggiore.length) {
    minore.push('X')
}

console.log('minore', minore.lenght);
console.log('maggiore', maggiore.length);