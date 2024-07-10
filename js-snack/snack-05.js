console.log('snack5')

/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l’array alla fine.
 */
let numeroDispari = []
for(let i = 0 ; i < 6 ; i++){
    let numb
    numb = parseFloat(prompt('iserisci un numero'))
if(numb % 2 !== 0){
numeroDispari.push(numb)
}
else{
}
}
console.log(numeroDispari)