const shareBtn = document.querySelector("[data-share-btn]");
const sharePopup = document.querySelector("[data-share-popup]");

const toggleSharePopup = () => {
    const expanded = shareBtn.getAttribute("aria-expanded") === "true" ? "false" : "true";

    shareBtn.setAttribute("aria-expanded", expanded);
    sharePopup.classList.toggle("expanded");
}

shareBtn.addEventListener("click", toggleSharePopup);

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && shareBtn.getAttribute("aria-expanded") === "true") {
        toggleSharePopup();
    }
})

window.addEventListener("click", (e) => {
    if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target) && shareBtn.getAttribute("aria-expanded") === "true") {
        toggleSharePopup();
    }
});