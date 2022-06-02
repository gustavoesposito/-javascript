verificarVelociade (130)
function verificarVelociade(velocidade){
    const kmPonto= 5
    const velocidadeMaxima=70
    if (velocidade<=velocidadeMaxima)
 console.log('ok')
 else {
     const pontos= Math.floor(((velocidade - velocidadeMaxima)/kmPonto))
     if (pontos >=12)
     console.log('Carteira Apreendida')
     
     else
         console.log(`Sua quantidade de pontos é de ${pontos}`)
     
     
 }
}