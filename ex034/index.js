//Objeto Endereço
//priemiro jeito
let endereço={
    Rua:'Emílio Cardoso Aires',
    Cidade :'Emílio Cardoso Aires',
    CEP: 08090350
}
 function exibirEndereço(Rua, Cidade, CEP){
  return{
        Rua ,
        Cidade ,
        CEP 
  
 }
 }
 let endereço1 = exibirEndereço('jose amilton nao sei oque', 'São Paulo', 08070340)
 console.log(endereço1)
 
 //Outro jeito
 //melhor jeito

 let endereco = {
     rua:'a',
     cidade : 'b',
     cep:'c'
 }
  function exibirEndereco(endereco){
      for (let chave in endereco)
      console.log(chave, endereco[chave])
  }
  exibirEndereco(endereco)
 
