console.log('snack4')

/*snack 04
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

let nomi = ['Jay Gatsby', 'Nick', 'Daisy', 'Tom', 'Myrtle']
console.log(nomi)

let invitati = prompt('inserisci il tuo nome')
//si usa la funzione .includes per verificare il valore contenuto dentro un Arry
if(nomi.includes(invitati)) {
    console.log ('puoi entrare')
}

else  {
    console.log('non puoi entrare')
}


