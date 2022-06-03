//camel case - umDoisTres
//metodo constrtutor
function criarCelular(marcaCelular, tamanhoTela,capacidadeBateria){
    return  {
        marcaCelular ,
        tamanhoTela,
        capacidadeBateria ,
        ligar: function(){
            console.log('Fazendo ligção')
        }
}
 }
 //pascal case - UmDoisTresQuatroCinco
 function Celular (marcaCelular, tamanhoTela, capacidade){
this.marcaCelular= marcaCelular,
this.tamanhoTela=  tamanhoTela ,
this.capacidade=capacidade,
this.ligar=function() {
    console.log('fazendo ligação....');
}
 }
 let celular = new Celular ('Asus', 5.5,5000)
 console.log(celular)