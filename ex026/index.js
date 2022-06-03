const celular ={
    marcaCelular: 'Asus',
    tamanhotela: {
        vertical: 155, 
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log('Fazendo ligção')
    }
}
// function factory (função de fábrica)
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
 const celular1=criarCelular('Zenfone', 5.5,5000)
 console.log(celular1);
 const celular2=criarCelular('Apple', 4.5,3500)
 console.log(celular2)
//----------------------------------------
console.log('---------------------------------')
  const carro={
modelo: 'B',
cavalos: '300cv',
ano:2021,
 ligarCarro : function(){
     console.log('Ligando' + this.modelo)
 }
  }
  function criandoCarro(modelo,cavalos,ano){
    return{
        modelo ,
        cavalos ,
        ano  ,
         ligarCarro : function(){
             console.log('Ligando' + this.modelo)
  }
}
  }
  let carro1=criandoCarro('BMW 320i ', '300cv', 2022)
  let carro2=criandoCarro('Tesla Model x Elétrico', '220cv', 2022 )
  console.log(carro1)
   console.log(carro2)

