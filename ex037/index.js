// Construction Function

//Criar objeto postagem
//título, mensagem, autor, visualizaçoes, comentarios,estaaovivo

function Postagem( titulo,mensagem, autor ){
 this.tiulot= titulo,
 this.mensagem=mensagem,
 this.autor=autor,
 this.visualizaçoes= 0,
 this.comentarios=  [],
 this.estaAovivo=false
 
let postagem = new Postagem ('a','b','c');
console.log(postagem)
}
