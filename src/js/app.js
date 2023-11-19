import Swup from "swup";
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupPreloadPlugin from "@swup/preload-plugin";

//Swup
const swup = new Swup({
    plugins: [new SwupA11yPlugin(), new SwupHeadPlugin({ persistTags: true }), new SwupScrollPlugin({animateScroll: !window.matchMedia('(prefers-reduced-motion: reduce)').matches}), new SwupPreloadPlugin()]
});


//OSM
function initOSM() {
    const button = document.getElementById("load");
    button.addEventListener("click", loadOSM);
}
function loadOSM() {
    const iframe = document.createElement("iframe");
    iframe.src =
        "https://www.openstreetmap.org/export/embed.html?bbox=9.777574539184572%2C51.943762246255886%2C9.813408851623535%2C51.9556651936878&layer=cyclemap&marker=51.94971411488452%2C9.795491695404053";
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

//current active
const current = () => {
    const navA = document.querySelectorAll('.navA');
    navA.forEach((link) => {
        link.classList.remove("active");
        if (window.location.pathname.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
        if (window.location.pathname !== "/") {
            navA[0].classList.remove("active");
        }
        //for blog entries
        if (window.location.pathname.includes("/neues/")) {
            navA[4].classList.add("active");
        }
    })
}
swup.hooks.on('link:click', () => {
    const nav = document.querySelector('.nav-links');
    if (nav.classList.contains("nav-active")) {
        const navLinks = document.querySelectorAll('.nav-links li');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFadeOut 0.4s ease forwards ${index / 12}s`;
            }
        })
        nav.classList.toggle("nav-active");
        const burger = document.querySelector('.burger');
        burger.classList.toggle("toggle");
        const navBar = document.querySelector('nav');
        navBar.classList.toggle("solidWhite");
    }
    init();
})

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
    const primaryHeader = document.querySelector('nav');
    const scrollWatcher = document.createElement('div');

    scrollWatcher.setAttribute('data-scroll-watcher', '');
    primaryHeader.before(scrollWatcher);

    const navObserver = new IntersectionObserver((entries) => {
        primaryHeader.classList.toggle('sticking', entries[0].isIntersecting)
        primaryHeader.classList.toggle('notSticking', !entries[0].isIntersecting)
    });
    navObserver.observe(scrollWatcher);
}

function init() {
    current();
    navScrollInit();
    if (window.location.pathname === "/") {
        setTimeout(initAccordion, 1000);
        setTimeout(initOSM, 1000);
        setTimeout(initKurse, 1000);
    }


}
addEventListener("DOMContentLoaded", (event) => { init() });
swup.hooks.on('visit:start', () => {
    const navA = document.querySelectorAll('.navA');
    navA.forEach((link) => {
        link.classList.remove("active");
    })
});

swup.hooks.on('visit:end', () => {
    init();
});