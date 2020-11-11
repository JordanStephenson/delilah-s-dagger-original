
let galleryImages = document.querySelectorAll('.mini-gallery .profile-img');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const exit = document.getElementById('exit');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const socialLinks = document.querySelector('.social-links');
//Toggle nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        //Animate links

    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        socialLinks.style.animation = 'navLinkFade 0.5s ease forwards 1.2s';
    });
    //Burger animation
    burger.classList.toggle('toggle');

});

}
navSlide();

/* Timeline animations*/

var tl = new TimelineMax();


tl.from('.profile-banner', 1.5, {
    opacity: 0,
    y: 20,
    ease: Power2.easeOut
}, 0);
tl.from('.piercing-title', 1.5, {
    opacity: 0,
    y: -20,
    ease: Power2.easeOut
}, 0.2);
tl.from('.price-list', 1.5, {
    opacity: 0,
    y: 20,
    ease: Power2.easeOut
}, 0.4);



/* Parallax */

 const parallax = document.getElementById('parallax');

 window.addEventListener('scroll', function() {
     let offset = window.pageYOffset;
     parallax.style.backgroundPositionY = offset * 0.5 + 'px';
 });