const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", hardleClick)

function hardleClick() {
    console.log("aqui");
}


/* Exercicios */

const $button = window.document.querySelector(".button-store.-second");
const $textoCarrinho = window.document.querySelector(".header-store .action.-last");

$button.addEventListener("click", buttonClick)

function buttonClick() {
    console.log("clicou no botão");
    alert("Adicionou");
    $textoCarrinho.innerHTML = "Carrinho (11)";
}