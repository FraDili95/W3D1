/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/


/* SCRIVI QUI LA TUA RISPOSTA
function crazySum( x , y){
        if( x === y ){
            return (x + y) * 3;
        }else{
            return x + y;
        }
}
console.log(crazySum( 3, 3)); 
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", 
 che accetta un numero intero come parametro e
 ritorna true se tale parametro è incluso tra 20 e 100 (incluso) 
 o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA
function boundary( x ){
      if( ( x > 20 && x <= 100 ) || x === 400 ){
        return true;
      }else{
        return false;
      }
}
   console.log( boundary( 55 ) );
   console.log( boundary( 400 ) );
   console.log( boundary( 2 ) ); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


/* SCRIVI QUI LA TUA RISPOSTA
let stringa = "EPICODE";
function reverseString( string ){
    let reverse = "";//serve per evitare che si crei udefined 
    for( let i = string.length-1; i >=0; i-- ){ //parto a memorizzare dalla fine della stringa in giù
        reverse += string[i];//crea la stringa reverse
    }
    return reverse;
}
console.log( reverseString( stringa ) ); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/


/* SCRIVI QUI LA TUA RISPOSTA
let stringa = "nel mezzo del cammin di nostra vita";
function upperFirst( str ) {
    let stringa_nuova = "";
    for( let i = 0; i < str.length; i++ ){
        if( i === 0 || str[i-1] === " " ){//se è la prima lettera o c'è uno spazio prima
            stringa_nuova += str[i].toUpperCase();//modifica in lettera maisc
        }else{
            stringa_nuova += str[i]; //aggiunge easy
        }
    }
    return stringa_nuova;
} 
stringa = upperFirst( stringa );
console.log( stringa ); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
function giveMeRandom( n ){
    const MAX = 10;
    const MIN = 0;
    let array = [];
    for ( let i = 0; i < n; i++ ){
        array += Math.floor( Math.random() * ( MAX - MIN ) + MIN );
    }
    return array;
}

console.table(giveMeRandom(5));
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


/* SCRIVI QUI LA TUA RISPOSTA 
function area( l1, l2 ) {
    return l1 * l2;
}
console.log(area(4, 6));*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/


/* SCRIVI QUI LA TUA RISPOSTA
function crazyDiff( n ){
    if( n > 19 ){
        return Math.abs( n - 19 ) * 3;
    }else{
        return Math.abs( n - 19 );
    }
}

console.log( crazyDiff( 20 ) ); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita 
 e ritornare il risultato, ma se la stringa fornita comincia proprio con "code"
  allora deve ritornarla senza modifiche.
*/



// SCRIVI QUI LA TUA RISPOSTA 
function codify( str ){
    let add = "code";
    if( str.includes(add) && str[0] === "c" && str[1] === "o" && str[2] === "d" && str[3] === "e" ){//se inizia con C ed la parola è presente ho la certezza che è all'inizio
        return str;//bene stampa
    }else{
        return add.concat(str);//aggiungila
    }
}
console.log( codify( "cavallocode" ) );

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/


/* SCRIVI QUI LA TUA RISPOSTA
function check3and7( num_pos ) {
    if( num_pos < 0 ){
        console.log( "IL NUMERO DEVE ESSERE POSITIVOOO");
        return "pirla";//:)
    }else{
        if( ( num_pos % 3 ) == 0 || (num_pos % 7 ) == 0 ){
            return true;
        }else{
            return false;
        }
    }//fine if principale
}
console.log( check3and7(4) );
console.log( check3and7(21) );
console.log( check3and7(6) ); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/


/* SCRIVI QUI LA TUA RISPOSTA 
function cutString( str ){
    let mod = "";
     for( let i = 1; i < str.length-1; i++ ){//copio tranne 0 e l'ultima
        mod += str[i];
     }   
     return mod;
}
console.log( cutString("supercalifragili") );*/
