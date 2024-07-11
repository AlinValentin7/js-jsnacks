console.log('snack10')

/*snack 10
Scrivere un programma a cui venga chiesto all’utente
 di inserire numeri uno dopo l’altro.
Quando l’utente scriverà 2 volte consecutive lo stesso numero
 allora il programma dovrà terminare. */
 let number2 = null
 for(;;){
    let number1 = parseInt(prompt('insereisci un  numero')) 
    if (number1 === number2 ){
        console.log(number2)
        console.log('hai perso')
        break
    }
    else{
        console.log(number1)
    }
    number2 = number1
 }