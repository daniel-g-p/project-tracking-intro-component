const burgerMenu = document.querySelector("#burgerIcon");
const mobileMenu = document.querySelector("#mobileNav");

burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
        burgerMenu.innerHTML = '<svg width="20" height="20"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"/></svg>'
    } else {
        mobileMenu.style.maxHeight = 0;
        burgerMenu.innerHTML = '<svg width="24" height="16"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" /></svg>'
    };
})