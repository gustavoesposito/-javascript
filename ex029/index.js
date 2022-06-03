//clonando obejtos
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
//um jeito
const obejto02 =( celular);
console.log(obejto02)
//outro jeito
const objeto03= Object.assign({
    ano:2020
}, celular)
