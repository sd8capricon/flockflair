const nav = document.querySelector("nav");
function addOpacity() {
    if (window.pageYOffset > 200) {
        nav.classList.add("scrolled", "shadow")
    } else {
        nav.classList.remove("scrolled", "shadow")
    }
}
window.addEventListener("scroll", addOpacity);