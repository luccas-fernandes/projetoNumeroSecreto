let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//  let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// let elemento = documento.querySelector (tag);
// elemento.innerHTML = texto;

//codigo evoluiu para o codigo abaixo:

function exibirTextoNaTela(tag, texto){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1); // return = esperamos que a função retorne algo.
}



 function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');  // pega o elemento pelo id
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
            
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior')
        } 
        tentativas++;
        limparCampo();

    }
 }
 
 function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
 }
