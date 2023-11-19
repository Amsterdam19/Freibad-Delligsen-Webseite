const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.querySelector('nav');


    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

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
    });

}
navSlide();

function loadOSM() {
    const iframe = document.createElement("iframe");
    const panelContent = document.querySelector(".panelContent");
    iframe.src = "https://www.openstreetmap.org/export/embed.html?bbox=9.777574539184572%2C51.943762246255886%2C9.813408851623535%2C51.9556651936878&layer=cyclemap&marker=51.94971411488452%2C9.795491695404053";
    iframe.classList.add("osmap");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrollinng", "no");

    //disable map preview
    const mapPreview = document.querySelector(".mapPreview");
    mapPreview.style.display = "none";

    //inject iframe
    panelContent.appendChild(iframe);
}

function expandPferd() {
    document.getElementById("bronzeSpan").classList.toggle("expandedFAB");
    document.querySelector(".kurseGridSeepferd").classList.toggle("expandedGrid");
}
function expandBronze() {
    document.getElementById("bronzeSpan").classList.toggle("expandedFAB");
    document.querySelector(".kurseGridBronze").classList.toggle("expandedGrid");
}