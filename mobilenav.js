const navBars = document.querySelector(".nav-bars");
const navbarLinks = document.querySelector(".navbar-links");
const crossMark = document.querySelector(".cross-mark");


navBars.addEventListener("click",() => {
    navbarLinks.classList.add("active");
})

crossMark.addEventListener("click",() => {
    navbarLinks.classList.remove("active");
})




// changing the navlinks color when clciked 

const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        // remove the active class from all element 
        navLinks.forEach(l => {
            l.classList.remove("active");
        })

        // add the active class to only the clicked element 
        link.classList.add("active");
    })
})