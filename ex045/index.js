//combinando e cortando arrays
//CONCATENANDO

let primeiro = [1,2,3]
let segundo = [4,5,6] 

const combinando =primeiro.concat(segundo)
console.log(combinando)

//DIVIDINDO OU CORTANDO
//inicia no 1 e termina no tres//nunca extrai o ultimo valor
//se voce  coloca dentro do parametro o indice '1' extrai todos valores iniciando nele ate o ultimo
//sem parametros copia todoos valores da array para uma variável em que voce definir 

const dividindo = combinando.slice(1,3)
console.log(dividindo)
//MEU JEITO PARA TREINAMENTO
 let parte1 =[ 'Gus','tavo']
 let parte2 = [  'Mac','iel', 'Espo','sito']

 let contact= parte1.concat(parte2)
 console.log(contact)

 //cortando 
 let cortando= contact.slice()
 console.log(cortando)
 
