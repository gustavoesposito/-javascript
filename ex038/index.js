//faixa de preço
//criar array de objetos de faixa de preço para que ele possa ser usado em um site igual o mercado livre
//priemira opçao
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo:700},
    {tooltip:'  de R$700 a R$1000', minimo:700, maximo:1000},
    {tootip: 'R$1000 ou mais', minimo:1000, maximo : 99999999}
];
//opçao dois usando factory function

function criarFaixaPreço(tooltip,minimo,maximo){
return{
tooltip,
minimo,
maximo
}
}
 let faixas2 = [
     criarFaixaPreço('a', 0,700),
     criarFaixaPreço('b',700,1000),
     criarFaixaPreço('c', 1000,10000),
 ]
 //terceira opcao
 function FaixaPreço(tooltip,minimo,maximo){
     this.tooltip=tooltip,
     this.minimo=minimo,
     this.maximo=maximo
 }
 let faixa3=[
     new FaixaPreço('d',10,20),
     new FaixaPreço('e',30,40),
     new FaixaPreço ('f',50,60)
 ]
 console.log(faixas)
 console.log(faixas2)
 console.log(faixa3)