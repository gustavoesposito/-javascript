var num = document.querySelector('input#fnum')
var lista = document.querySelector('input#flista')
let res = document.querySelector('input#res')
var valores = []

function isNumero(n){
if(Number(n)>= 1 && Number(n) <=100){
    return true
} else {
    return false
}
}
function inLista(n, l ){
 if (l.indexOf(Number(n))!= -1) {
     return true 
 }else{
     return false
 }
}
function adicionar(){
if ( isNumero(num.value) && !inLista(num.value, valores)) 
{
 window.alert('Tudo Ok')
} else {
    window.alert('Valor encontrado na lista ou valor inválido')
}
}