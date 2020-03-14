const hamburger = document.querySelector('.nav--toggle');
const navLinks = document.querySelector('.nav--links');
const links = document.querySelector('.nav--links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    hamburger.classList.toggle('is-active');
});