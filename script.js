// Scroll Indicator
document.addEventListener("DOMContentLoaded", () => {
    const indicator = document.querySelector(".scroll-indicator");
    const sections = document.querySelectorAll(".section");

    function updateIndicator() {
        const currentSection = sections[Math.floor(window.scrollY / window.innerHeight)];
        indicator.style.left = currentSection.offsetLeft + currentSection.offsetWidth / 2 + "px";
    }

    window.addEventListener("scroll", updateIndicator);
    window.addEventListener("resize", updateIndicator);

    updateIndicator();
});
