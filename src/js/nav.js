const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.querySelector('nav');


    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //aria-expanded
        const menuExpanded = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", menuExpanded ? "false" : "true");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 12}s`;
            }
        })

        //Burger Animation
        burger.classList.toggle('toggle');

        //navBar solid
        navBar.classList.toggle('solidWhite')
        const navA = document.querySelectorAll('.navA');
    })
}