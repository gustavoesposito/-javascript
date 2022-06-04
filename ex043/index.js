/*removendo elementos de um array

let numeros =[1,,2,3,4,5,6]
 acrescentando um nunero no final
numeros.push(7),
console.log(numeros),
  acrescentando um numero no meio 
numeros.splice(2,0,8),
console.log(numeros),
numeros.sort(),
console.log(numeros),
 colocando no começo
numeros.unshift(0.5),
console.log(numeros)
*/
let numeros =[1,,2,3,4,5,6]
//REMOVENDO DO FINAL (ASSUNTO DA AULA)
//utilizamos o pop
//colocamos dentro de algo

//removendo do final
//pop
let final= numeros.pop();
console.log(final);

//removendo do começo
//shift
 let começo= numeros.shift();
 console.log(começo)
 console.log(numeros)

 //removendo do meio 
 //utilizamos o splice
 //splice
 let meio =numeros.splice(2,1 )
 console.log(meio)
 console.log(numeros)





 
