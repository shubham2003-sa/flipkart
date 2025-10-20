const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", (!expanded).toString());
        navLinks.classList.toggle("is-open");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A" && navLinks.classList.contains("is-open")) {
            navLinks.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        }
    });
}
