//Igualdade de Objetos (Exercício)

function Endereco(rua, cidade , cep){
    this.rua=rua,
    this.cidade=cidade,
    this.cep=cep
}
const endereco= new Endereco ('a','b','c')
const endereco01= new Endereco ('a','b','c')

function saoIguais(endereco, endereco01){
//comparar se são iguais
return endereco.rua === endereco01.rua &&
endereco.cidade === endereco01.cidade &&
endereco.cep=== endereco01.cep
}
console.log(saoIguais(endereco,endereco01))
function temEndereçoMemoria(endereco, endereco01){
    // comparando se a referencia do objeto aponta para o mesmo local da memoria

    return endereco===endereco01
}
console.log(temEndereçoMemoria(endereco, endereco01))