//Somando os múltiplos de 3 e 5
//armazenar múltiplos de 3 e de 5
//somar os dois

somar(10)
function somar(limite){
let multiplos3=0;
let multiplos5=0;
for(i=0;i<=limite ;i++){
    if(i % 3===0)
    multiplos3 += i
    else if (i % 5===0)
    multiplos5 += i
}
console.log(multiplos3+ multiplos5)
}