console.log('snack 8')

/*snack 08
Fate generare un numero random da 0 a 10 al computer,
 e chiedete all’utente di inserire un suo numero. 
 Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto,
  altrimenti ha perso.
A questo punto fate giocare l’utente,
 fintanto che non vince la partita contro il PC */

let numeroCasuale = Math.round(Math.random() * 10 )
 console.log(numeroCasuale)
for(;;){

 let numeroUtente = parseInt(prompt('inserisci un numero da 1 a 10'))

 if(numeroUtente === numeroCasuale ){
    console.log('Hai vinto!')
    break
 }
 else {
    console.log('Hai perso!')
 }
}