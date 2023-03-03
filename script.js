const navIcons = document.querySelector('.navbar__icons');
const navMenu = document.querySelector('.nav__menu');



navIcons.addEventListener('click', () => {
    const visibilty = navMenu.getAttribute('data-visible');

    if (visibilty === "false") {
        navMenu.setAttribute('data-visible', 'true');
        navIcons.setAttribute('aria-expanded', 'true');
    }else{
        navMenu.setAttribute('data-visible', 'false');
        navIcons.setAttribute('aria-expanded', 'false');
    }   
});