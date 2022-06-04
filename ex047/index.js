//***FOREACH***
//**ITERANDO ARRAYS** 

const num= [1,2,3,4,5]
/*ate da para fazer deste jeito , mas tem um jeito melhor de se fazer com foreach
for(nume of num)
console.log(nume)
*/
num.forEach(( nume,indice) =>console.log(nume,indice))
//TREINANDO
const nome1=['gust','avo']
const nome2=['espo', 'sito']

const nome=[...nome1,...nome2]
console.log(nome)
nome.forEach(( nome3,indice)=>console.log(nome3,indice))
