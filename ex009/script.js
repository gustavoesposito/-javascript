function carregar(){
    var msg = window.document.getElementById("msg")
    var foto = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML= `agora sao ${hora} horas`
    if(hora >= 0 && hora < 12){
        foto.src=('tarde2.png') 
    }else if(hora>=12 && hora<18){
        foto.src=('tarde3.png') 
    }else{
        foto.src=('noite 2.png')
    }
}