/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    let rettangolo = l1 * l2
    console.log(rettangolo)
    return rettangolo
}
console.log(area(4,5))
area(5,7)


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function crazySum(n1,n2) {
    if( n1 === n2){
    return (n1+n2) * 3
}else {
    return n1 + n2
}
 }
console.log(crazySum(2,3))
console.log(crazySum(3,3))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
    if( n > 19) {
return Math.abs(n - 19) // rende il valore sempre positivo
//  let result = n - 19 > 0 ? n - 19 : -(n - 19)
    }else {
return Math.abs (n - 19)
        }
    }
 


// }
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if((n >= 20 && n <=100) || n === 400){ //n è compresa da 0 a 100
        console.log("true")
        return true
    }
    else {
        console.log("false")
        return false
    }
}
console.log(boundary(30))
console.log(boundary(400))
console.log(boundary(401))





/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
    if(
       str.startsWith('EPICODE')
    //    str.slice(0,7) === 'EPICODE' // 
     
    ){
return str
    } else {
return 'EPICODE' + str
    }
}

console.log(epify('EPICODE forma sviluppatore'))

console.log(epify('Hello World'))

// /* ESERCIZIO 6
//  Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
//  di 3 o di 7. (Suggerimento: usa l'operatore modulo)
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

function check3and7 (n) {
    if( n > 0 && (n % 3 === 0 || n % 7 === 0)){ 
            console.log("Bravo!")
            return true
    }
   else {
        return false
   }
}
console.log(check3and7(14))
console.log(check3and7(13))

// operatore modulo multiplo d 3 e la divizione deve dare zero

// /* ESERCIZIO 7
//  Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
// let y = ["EPICODE", "CORSO"]

function reverseString(str) {
    let strAsArray = str.split()
   strAsArray.reverse()
let reverseString = strAsArray.join('')
return reverseString

}
console.log(reverseString('EPICODE'))

// /* ESERCIZIO 8
//  Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
//  La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(phrase) {
let arrayOfWords = phrase.split(' ')
//  ora arrayOfWords è ad es. 'EPICODE', 'forma', ' sviluppatori'
let result = ''
for( let i = 0; i < arrayOfWords.length; i++) {
    result += 
    arrayOfWords[i].charAt(0).toUpperCase() + // prende la prima lettera della parola e la mette maiuscola
    arrayOfWords{i}.slice(1, arrayOfWords[i].length)  // e poi ci aggiungo il resto della parola
    + ' ' // ci aggiungo uno spazio
}
   return result
}
console.log(upperFirst('Oggi è una bella giornata'))


// /* ESERCIZIO 9
//  Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
//  della stringa originale.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
let result = str.slice(1, str.length - 1) // punto iniziale, di str -1 cioè l'ultimo carattere
return result
}

console.log(cutString('CIAO'))


// /* ESERCIZIO 10
//  Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
// */
// push tot volte dentro
// /* SCRIVI QUI LA TUA RISPOSTA */



function giveMeRandom(n){
    let result =[]
     for ( let i = 0; i < n; i++){
         result.push( Math.floor(Math.random()*11))
    }
return result
}

console.log(giveMeRandom(9))