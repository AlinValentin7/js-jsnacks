console.log("snack 1")

/*snack 01
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

let number1 = prompt('inserrisci un numero ')
console.log(number1)
let number2 = prompt('inserrisci un numero')
console.log(number2)

if(number1 > number2)
    {
    console.log(number1 + ' ' + ' e maggiore ' + ' di ' + ' ' + number2)
}
else if(number1 < number2)
{
    console.log(number1 + ' ' + ' e minore ' + ' di ' + ' ' + number2)
}

