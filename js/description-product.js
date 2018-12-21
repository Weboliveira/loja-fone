const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", hardleClick)

function hardleClick() {
    /* if ($heart.classList.contains("-active")) {
         $heart.classList.add("-active");
         console.log('ativo');
     } else {
         $heart.classList.remove("-active");
         console.log('removel');
     }*/

    $heart.classList.toggle("-active"); // mesma coisa que o IF/Else

}