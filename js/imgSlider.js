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
    const accordion_panel = panelToActivate.parentElement.querySelectorAll(".accordion-panel");

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