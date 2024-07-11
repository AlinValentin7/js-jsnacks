console.log('snack6')

/*snack 06
Fate generare un numero random da 0 a 10 al computer,
 e chiedete all’utente di inserire un suo numero. 
 Se il numero scelto dall’utente è uguale al numero del computer 
 informate l’utente che ha vinto, altrimenti ha perso. */

 let numeroCasuale = Math.round(Math.random() * 10 )
 console.log(numeroCasuale)

 let numeroUtente = parseInt(prompt('inserisci un numero da 1 a 10'))

 if(numeroUtente === numeroCasuale ){
    console.log('Hai vinto!')
 }
 else {
    console.log('Hai perso!')
 }

 