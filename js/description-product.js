const $heart = window.document.querySelector(".-heart"); // selecioa um elemnetos 
const $stars = window.document.querySelectorAll(".cont-star .star"); // seleciona todos os elementos All

$heart.addEventListener("click", hardleClick)

//  função da estrela
// percorre a lista usando o forEach, retornando cada elemento


$stars.forEach(($star, index_selected) => {
    $star.addEventListener("click", function() {
        $stars.forEach((star, index) => {
            if (index_selected >= index) {
                star.classList.add("-active");
            } else {
                star.classList.remove("-active");
            }
        });
    });
});











function hardleClick() {
    this.classList.toggle("-active");
}