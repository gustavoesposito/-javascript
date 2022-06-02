const filme = {
    título : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem:' Home de ferro'
}
exibirPropiedades(filme)

function exibirPropiedades(obj){
    for (prop in obj)
    if (typeof obj[prop]=== 'string')
    console.log(prop,obj[prop])
}