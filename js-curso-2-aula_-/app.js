var numeroSecreto = gerarNumeroAleatorio();

//  var titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// var paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// var elemento = documento.querySelector (tag);
// elemento.innerHTML = texto;

//codigo evoluiu para o codigo abaixo:

function exibirTextoNaTela(tag, texto){
    var elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1); // return = esperamos que a função retorne algo.
}

 function verificarChute() {
    var chute = document.querySelector('input').value
     console.log('chute');
 }
 

