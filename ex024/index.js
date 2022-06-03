//Criar uma função que exiba a quantidade de * 
//que aquela linha possua
 exibirAsteristicos(5)
 
 function exibirAsteristicos(linhas){
     let padrao = ''
     for(let linha = 1; linha<=linhas; linha++){
         padrao += '*'
         console.log (padrao)
     }
 }