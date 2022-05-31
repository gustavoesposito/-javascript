function parimpar(n){
    if (n%2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(parimpar(233))

//outra function
function soma(n1=0, n2=0){
    return n1+n2
}
console.log(soma( 590))
//outra, calculando fatorial
function fatorial(n){
    let fat =1
    for(let c = n; c > 1; c--){
        fat *=c
    }
    return fat
}
console.log(fatorial(5))
//outro jeito de fazer fatorial
//5 fatorial = 5x4x3x2x1
//5 fatorial =m 5 x 4! da p fazer o fatorial de um numeor multiplicanod o numero por outro fatorial , isso se chama recursividade
function fatoria(n){
    if ( n== 1 ){
        return 1
    }else{
        return n * fatoria(n-1)
    }
}
console.log(fatoria(5))