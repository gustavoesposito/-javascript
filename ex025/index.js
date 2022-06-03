//Criar função para mostrar os números primos 

//Primos 
//Compostos

//ex:10,11

//10 (1 ou por ele mesmo)

//10 - 1,2,4,6,10

exibirNumerosP(15)
 
function exibirNumerosP(limite){
    for(let numero = 2; numero <= limite; numero++){
     let ehPrimo =true;

    for (let divisor = 2; divisor< numero; divisor++){
        if (numero % divisor === 0){
 ehPrimo=false;
 break;
        }
    } 
    if (ehPrimo) console.log(numero)
 

 }
}
