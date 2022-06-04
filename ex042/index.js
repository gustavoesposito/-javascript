//Arrow Function
//Tira o function e coloca a Seta '=>'
//se voce não estiver parametros coloca os parenteses depois do find
const marcas =[
    {id:1, nome:'a'},
    {id:2, nome:'b'}
]
 console.log(marcas.find(marca =>marca.nome ==='a'))
 //do meu jeito para testar

 let oi=[
     {id:1,nome:'o'},
     {id:2,nome:'i'}
 ]
  console.log(oi.find( oi=> oi.nome=== 'o'))