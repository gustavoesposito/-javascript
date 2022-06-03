// Objeto postagem de Blog 
//EU quero que vcoe crie nesse exercicio um objeto postagem de blog que vai ter as seguintes propiedades

/*
titulo
mensagem
autor
vizualizaçoes
comentarios
       (autor, mensagem )
 estaAoVivo*/

 let postagem = {
     titulo : 'a',
     mensagem : ' b',
     autor: 'c',
     visualizaçoes:10,
     comentarios: [
         { autor: 'a', mensagem: 'b' },
         { autor: 'a', mensagem: 'b' }
     ],  

     estaAovivo : true
 }
 console.log(postagem);