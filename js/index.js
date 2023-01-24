/*
OBJETIVO 1 - quando o usuario clicar no botao de veja o trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal

OBJETIVO 1 - quando o usuario clicar no botao de veja o trailer, devemos abrir a modal com o video do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    -passo 2 - dar um jeito de identificar quando o usuario clicar no botão
    -passo 3 - dar um jeito de pegar o elemento da modal no js
    -passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
        -passo 1 - dar um jeito de pegar o modal usando o js
        -passo 2 - dar um jeito de identificar quando o usuario clicar no X
        -passo 3 - fechar a modal
*/

//passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
console.log(document);

console.log(document.querySelector('.botao-trailer'));

const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkVideo = video.src;

//passo 2 - dar um jeito de identificar quando o usuario clicar no botão
botaoTrailer.addEventListener("click",()=> {
    console.log("clicou no botao veja o trailer");
    //passo 4 - abrir a modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkVideo);
    
});

//passo 3 -dar um jeito de pegar o elemento modal no js


// OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
//         passo 1 - dar um jeito de pegar o modal usando o js


//passo 2 - dar um jeito de identificar quando o usuario clicar no X
botaoFecharModal.addEventListener("click",()=> {
    //passo 3 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});



