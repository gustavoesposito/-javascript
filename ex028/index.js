//natureza dinamica dos objetos
 const mouse = {
     cor : ' red',
     marca : 'dazz'
 }
 mouse.velocidade=5000;
 mouse.trocarDpi =function(){
     console.log('mudando dpi')

 }
 delete mouse.marca
 console.log (mouse)
