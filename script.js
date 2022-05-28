function carregar(){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem')
var data = new Date()
var hora= data.getHours()
msg.innerHTML = ` Agora são ${hora}  horas`

if ( hora <= 12){
    img.innerHTML= ' <img src = "tarde2.png">'
} else if(hora <=18){
    img.innerHTML= ' <img src = "tarde3.png">'
}else if (hora >=19){
   
    img.innerHTML= ' <img src = "noite2.png">'
}else{
    console.log('Sem Informação')
}
}

