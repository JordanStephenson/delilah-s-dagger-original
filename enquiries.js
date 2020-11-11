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
const slides = document.querySelectorAll('.booking-slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;



const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //Add current to start
        slides[0].classList.add('current');
    }     
    setTimeout(() => current.classList.remove('current')); 
    
}

// Auto slide
if(auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}
// Timeline animations

var tl = new TimelineMax();

tl.from('.title', 2, {
    opacity: 0,
    y: 20,
    ease: Power2.easeOut
}, 0);
tl.from('.booking-slider', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, .2) ;
tl.from('.info-page', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, .4);