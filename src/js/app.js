//OSM
function initOSM() {
    const button = document.getElementById("load");
    button.addEventListener("click", loadOSM);
}
function loadOSM() {
    const iframe = document.createElement("iframe");
    iframe.src =
        "https://www.openstreetmap.org/export/embed.html?bbox=9.777574539184572%2C51.943762246255886%2C9.813408851623535%2C51.9556651936878&layer=mapnik&marker=51.94971411488452%2C9.795491695404053";
    iframe.classList.add("osmap");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrollinng", "no");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.borderRadius = "var(--indexBRadius)";

    //disable map preview
    const mapPreview = document.querySelector(".mapPreview");
    mapPreview.style.display = "none";

    //show map Div
    const map = document.getElementById("map");
    map.style.visibility = "visible";

    //inject iframe
    map.appendChild(iframe);
}

//KurseCard
function pfexpandCard() {
    const pffab = document.getElementById("1fab");
    const pfkurseCont = document.getElementById("1Cont");
    pffab.classList.toggle("expandedFAB");
    pfkurseCont.classList.toggle("expandedCont");
}
function brexpandCard() {
    const brfab = document.getElementById("2fab");
    const brkurseCont = document.getElementById("2Cont");
    brfab.classList.toggle("expandedFAB");
    brkurseCont.classList.toggle("expandedCont");
}
function initKurse() {
    document.getElementById("1fab").addEventListener("click", () => {
        pfexpandCard();
    });
    document.getElementById("2fab").addEventListener("click", () => {
        brexpandCard();
    });
}

//Accordion
function initAccordion() {
    const accordion = document.querySelector(".accordion");

    accordion.addEventListener("click", (e) => {
        const activePanel = e.target.closest(".accordion-panel");
        if (!activePanel) return;
        toggleAccordion(activePanel);
    });
    function toggleAccordion(panelToActivate) {
        const buttons = panelToActivate.parentElement.querySelectorAll("button");
        const contents =
            panelToActivate.parentElement.querySelectorAll(".accordion-content");
        const accordion_panel =
            panelToActivate.parentElement.querySelectorAll(".accordion-panel");

        buttons.forEach((button) => {
            button.setAttribute("aria-expanded", false);
        });

        contents.forEach((content) => {
            content.setAttribute("aria-hidden", true);
        });

        accordion_panel.forEach((panel) => {
            panel.classList.remove("imgActive");
        });

        panelToActivate.querySelector("button").setAttribute("aria-expanded", true);
        panelToActivate.classList.add("imgActive");

        panelToActivate
            .querySelector(".accordion-content")
            .setAttribute("aria-hidden", false);
    }
}

//Nav Scroll
function navScrollInit() {

    const primaryHeader = document.querySelector('header');
    const scrollWatcher = document.createElement('div');

    scrollWatcher.setAttribute('data-scroll-watcher', '');
    primaryHeader.before(scrollWatcher);

    const navObserver = new IntersectionObserver((entries) => {
        primaryHeader.classList.toggle('sticking', entries[0].isIntersecting)
        primaryHeader.classList.toggle('notSticking', !entries[0].isIntersecting)
    });
    navObserver.observe(scrollWatcher);
}

//Nav toggle
function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navBar = document.getElementById("homeNav");


    burger.addEventListener('click', () => {
        
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //aria-expanded
        const menuExpanded = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", menuExpanded ? "false" : "true");
        console.log("navslideAria")

        //Animate Links
        //navLinks.forEach((link, index) => {
        //    if (link.style.animation) {
        //        link.style.animation = '';
        //    } else {
        //        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 12}s`;
        //    }
        //})

        //Burger Animation
        burger.classList.toggle('burgerToggle');

        //navBar solid
        navBar.classList.toggle('solidWhite')
        const navA = document.querySelectorAll('.navA');
    })
}

function init() {
    navScrollInit();
    setTimeout(navSlide, 1000);
    if (window.location.pathname === "/") {
        setTimeout(initAccordion, 1000);
        setTimeout(initOSM, 1000);
        setTimeout(initKurse, 1000);
    }
}
init();
document.addEventListener('astro:after-swap', init);