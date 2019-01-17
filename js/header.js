const $search = document.querySelector('[type="search"]');

$search.addEventListener("click", search)


function search() {
    this.classList.toggle("-active");
}