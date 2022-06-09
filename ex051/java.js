/*const botao= document.querySelector('button');

botao.addEventListener('click', ()=>{
    alert('LOGIN')
})*/
function newBUtton(text, callback){
const $body= document.querySelector("body")
/*colocanod um botão dentro do meu body*/

const $button =document.createElement("button");/*crianod botao apenas com javaScript*/

$button.textContent=text;
/*adicionando o texto que quero dentro do botão*/ 

callback();

 $body.insertAdjacentElement ("beforeend",$button);

 return $button;
}
    newButton("Login",()=>{
        console.log("Funcionou,estamos dentro da função newButton")
    });
    newButton("SignUp")

 