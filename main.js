const hamburger = document.getElementById("hamburger");
const list = document.getElementById("navlist");

hamburger.addEventListener("click", ()=>{
   list.classList.toggle("navlist-active");
});


// const hamburger = document.getElementById('hamburger');
// const navlist = document.getElementById('navlist');

// hamburger.addEventListener('click', () => {
//     navlist.classList.toggle('active');
//     hamburger.classList.toggle('active');
// });

// const navLinks = document.querySelectorAll('.link');
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         if (window.innerWidth <= 768) {
//             navlist.classList.remove('active');
//             hamburger.classList.remove('toggle');
//         }
//     });
// });

// document.addEventListener('click', (e) => {
//     if (!hamburger.contains(e.target) && !navlist.contains(e.target)) {
//         navlist.classList.remove('active');
//         hamburger.classList.remove('toggle');
//     }
// });