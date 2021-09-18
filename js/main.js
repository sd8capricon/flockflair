// Nav Bar
const nav = document.querySelector("nav");
function addOpacity() {
    if (window.pageYOffset > 200) {
        nav.classList.add("scrolled", "shadow")
    } else {
        nav.classList.remove("scrolled", "shadow")
    }
}
window.addEventListener("scroll", addOpacity);

// Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    header: 'nav'
});

// Counter

$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 700
  });

// const counters = document.querySelectorAll(".counter");
// const speed = 200;
// counters.forEach(counter => {
//     function updateCount(){
        
//         console.log("counter inner");
//         const target = +counter.getAttribute("data-target");
//         const count = +counter.innerText;
        
//         console.log(target, count, counter);

//         const inc = target / speed;

//         if(count<target){
//             counter.innerText = count + inc;
//             setTimeout(updateCount(), 1);
//         } else {
//             count.innerText = target
//         }
//     };
//     updateCount();
// });