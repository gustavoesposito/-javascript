//esvaziando um array

let numeros =[1,2,3,4,5,6]
let outros = numeros;//referencia , onde guardei o objeto

/*PRIMEIRA SOLUÇÃO

 numeros =[]
 console.log(outros)

 porem não se é tão eficaz esse método pois quando se tem outra referencia ou etsá guardando em outro lugar ess earray ele não se apaga por completo */

/*SEGUNDA SOLUÇÃO

MELHOR SOLUÇÃO

numeros.lenght=0
esvziamos completamente tudo que esta dentro do array
*/

/*TERCEIRA SOLUÇÃO

utilizamos om splice

numeros.splice(0,numeros.lenght)

*/

/*QUARTA SOLUÇÃO 

utilizamos o pop 
while (numeors.lenght > 0)
numeros.pop()
*/


