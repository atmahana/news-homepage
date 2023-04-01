const navLink = document.querySelector('.navbar__links');
const navToggle = document.querySelector('.menu-toggle');

navToggle.addEventListener('click', () => {
    const visibility = navLink.getAttribute('data-visible');
    if(visibility === "false"){
        navLink.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else{
        navLink.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});
