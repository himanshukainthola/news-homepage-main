const navIcons = document.querySelector('.navbar__icons');
const navMenu = document.querySelector('.nav__menu');
const body = document.querySelector('body');

navIcons.addEventListener('click', () => {
    const visibilty = navMenu.getAttribute('data-visible');

    if (visibilty === "false") {
        navMenu.setAttribute('data-visible', 'true');
        navIcons.setAttribute('aria-expanded', 'true');
        body.classList.add('show');
    }else{
        navMenu.setAttribute('data-visible', 'false');
        navIcons.setAttribute('aria-expanded', 'false');
        body.classList.remove('show');
    }   
});