console.log('JS Ok')


// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti. 
// Esegui questo programma in due versioni, con il for e con il while.


// ESERCIZIO CON FOR
let somma = 0;

 for (let i=0; i < 5; i++) {
    const numeroUtente = parseInt(prompt('Inserisci un numero'));
    if(!isNaN(numeroUtente)){ // isNaN(numeroUtente) === false
         somma = somma + numeroUtente; //somma degli elementi nell'array
    }
}
//stampo somma
console.log('La somma dei numeri scelti è', somma);









//ESERCIZIO CON WHILE

let somma = 0;

let = 0;

while (i < 5) {

    //codice da eseguire
    const numeroUtente = parseInt(prompt('Inserisci un numero'));
    if(!isNaN(numeroUtente)){ // isNaN(numeroUtente) === false
         somma = somma + numeroUtente; //somma degli elementi nell'array
    }


    //codice per la gestione dell'uscita dal ciclo
    i++; 
}


somma = somma + numeroUtente;

//stampo somma
console.log(somma);


