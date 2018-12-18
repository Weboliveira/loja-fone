const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", hardleClick)

function hardleClick() {
    console.log("aqui");
}


/* Exercicio Basico */

const $button = window.document.querySelector(".button-store.-second");

$button.addEventListener("click", buttonClick)

function buttonClick() {
    console.log("clicou no botão");
}