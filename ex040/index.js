//Encontrando um Elemento dentro de arrays( tipos primitivos)

const numeros =[1,2,3,1,4]
//utilizamos o indexOf deste jeito para ver ou encontrar um numero dentro de um array, serve apenas ´para numeros
console.log(numeros.indexOf(2))
console.log(numeros.lastIndexOf(1))

// adicionando numeros e vendo sua existencia dentro do array e ultima atuação dele dentro do array

let numbers =[1,3,2,4]
//colocando em ordem
numbers.sort()
//mostrando no console
console.log(numbers)
//colocando no começo
numbers.unshift(1)
//mostrando no console
console.log(numbers)
//colocando no meio
numbers.splice(4,0,8)
//mostando no console
console.log(numbers)
//colocando em ordem
numbers.sort()
//mostando no console
console.log(numbers)
//colocando o numero 9 no final
numbers.push(9)
//mostrando no console
console.log(numbers)
//vendo onde é a posição do 3 no array
console.log(numbers.indexOf(3))
//vendo a ultima aparicão do 1 no array
console.log(numbers.lastIndexOf(1))

