//Exercício Nota Escolar
//Obter a média a partir de array
//0-59=F
//60-69=D
//70-79=C
//80-89=B
//90-100=A

 const array = [70,70,80];
 
 console.log(mediaAluno(array));

 function mediaAluno(notas){
     const media =calcularMedia(notas)
     
     if ( media < 59) return 'F';
     if ( media < 69) return 'D';
     if (media < 79) return ' C';
     if (meida < 89 ) return 'B';
     return 'A'
 }
 function calcularMedia(array){
    let soma =0;
    for(let valor of array){
    soma += valor;
    }
    const media = soma/(array.lenght);

 }