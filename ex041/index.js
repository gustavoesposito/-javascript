//Encontrando do tipo de referencia
//utilizamos o find para achar
//criei objeto com array e seu id e nome
let marcas=[
    {id:1, nome: ' a'}, 
    {id:2, nome: ' b'}, 
];
//utilizei o find junto de uma funçao
marcas.find(function(marca0){
    return marca0.nome=== 'a'
})
 console.log(marcas)
 //do meu jeito para treinamento

 let oi =[
     {id:1 , nome:'o'},
     {id:2, nome:'i'},
 ]

  oi.find(function(oi){
return oi.nome==='o'
 })
 console.log(oi)

 