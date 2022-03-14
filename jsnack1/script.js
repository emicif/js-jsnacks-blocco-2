console.log('JS Ok')


//Crea un array di numeri interi 
// fai la somma di tutti gli elementi che sono in posizione dispari.



//creo array con numeri interi
const numeri = [1, 2, 3, 4, 5];
let somma = 0;

for (let i = 0; i < numeri.length; i ++) {
    
    const modulo = i % 2;
   
    if(modulo !==0 ){ //(modulo===1)
        somma = somma + numeri[i]; //somma += numeri[i]
    }   
}



// faccio somma alla fine del ciclo for

 console.log('La somma è', somma);