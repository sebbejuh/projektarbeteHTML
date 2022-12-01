const hamburger = document.getElementsByClassName('hamburgerbtn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})