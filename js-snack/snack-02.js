console.log('snack2')

/*snack 02
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

let word1 = prompt('inserisci una parola')
let word2 = prompt('inserisci una parola')

if(word1.length > word2.length) {
    console.log(word2, word1)
}
else if(word1.length < word2.length) {
    console.log(word1, word2)
}


