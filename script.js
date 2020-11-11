let galleryImages = document.querySelectorAll('.gallery-pics .img');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

  
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

/* Parallax */

const parallax = document.querySelectorAll('.slide');

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    parallax.forEach((slide, index) => {
        slide.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});

const slides = document.querySelectorAll('.slide');
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

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for previous slide
    if(current.previousElementSibling) {
        //Add current to previous sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //Add current to last
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if(auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

/* Timeline animations*/

var tl = new TimelineMax();

tl.from('.landing-page', 2, {
    opacity: 0,
    y: 20,
    ease: Power2.easeOut
}, 0);
tl.from('.landing-page h2', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, .5) ;
tl.from('.button', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, 1);
tl.from('.artists .container', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, 0.2);
tl.from('.gallery', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, 0.2);
tl.from('.contact', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, 0.2);




/* JQuery smooth scrolling */
$('.nav-links a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top 
        }, 1500)
    }
})
$('.dagger-img a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top 
        }, 1500)
    }
})



/* View gallery image */

if(galleryImages) {
    galleryImages.forEach(function(image,index) {
        image.addEventListener('click', () => {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue('background-image');
            let getImgUrlPos = getFullImgUrl.split('IMG/');
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImg = index + 1;
            let container = document.body;
            let newImgWindow = document.createElement('div');
            
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute('class', 'img-window');
            newImgWindow.setAttribute('onclick', 'closeImg()' );
            let newImg = document.createElement('img');
            newImgWindow.appendChild(newImg); 
            newImg.setAttribute('src', 'IMG/' + setNewImgUrl);
            newImg.setAttribute('id', 'current-img');

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth -imgWidth) / 2) - 80;

                newImg.style.animation = `navLinkFade 0.7s ease forwards`;
                let newPrevBtn = document.createElement('a');
                let btnPrevText = document.createTextNode('Prev');
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute('class', 'img-btn-prev');
                newPrevBtn.setAttribute('onclick', 'changeImg(0)');
                newPrevBtn.style.cssText = 'left: '+ calcImgToEdge + 'px;';
    
                let newNextBtn = document.createElement('a');
                let btnNextText = document.createTextNode('Next');
       
                newPrevBtn.style.animation = `navLinkFade 0.7s ease forwards`;
 
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute('class', 'img-btn-next');
                newNextBtn.setAttribute('onclick', 'changeImg(1)');
                newNextBtn.style.cssText = 'right: '+ calcImgToEdge + 'px;';
                newNextBtn.style.animation = `navLinkFade 0.7s ease forwards`;

                //Whose Picture is it

                    let artist = "";
                    let artistSrc = "";
                
                    if ((setNewImgUrl[(setNewImgUrl.length) - 5] === '8') & (setNewImgUrl[(setNewImgUrl.length) - 6] === 'g') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '1') & (setNewImgUrl[(setNewImgUrl.length) - 6] === 'g') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '7') & (setNewImgUrl[(setNewImgUrl.length) - 6] === 'g') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '3') & (setNewImgUrl[(setNewImgUrl.length) - 6] === 'g') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '2') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '0') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '0') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '2') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '4') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '1') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '8') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '1') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '2') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '1') ) {
                        artist = 'Leanne';
                        artistSrc = 'leanne.html';
                    } else if ((setNewImgUrl[(setNewImgUrl.length) - 5] === '2') & (setNewImgUrl[(setNewImgUrl.length) - 6] === 'g') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '8') & (setNewImgUrl[(setNewImgUrl.length) - 6] === 'g') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '3') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '1') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '6') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '1') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '7') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '1') ) {
                        artist = 'Jodie';
                        artistSrc = 'jodie.html';
                    } else if ((setNewImgUrl[(setNewImgUrl.length) - 5] === '5') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '1') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '0') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '1') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '1') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '1') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '4') & (setNewImgUrl[(setNewImgUrl.length) - 6] === 'g') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '1') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '2') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '3') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '2') ) {
                        artist = 'Stepahnie';
                        artistSrc = 'stephanie.html';
                    } else if((setNewImgUrl[(setNewImgUrl.length) - 5] === '5') & (setNewImgUrl[(setNewImgUrl.length) - 6] === 'g') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '6') & (setNewImgUrl[(setNewImgUrl.length) - 6] === 'g') ||
                    (setNewImgUrl[(setNewImgUrl.length) - 5] === '9') & (setNewImgUrl[(setNewImgUrl.length) - 6] === '1')) {
                        artist = 'Katy';
                        artistSrc = 'katy.html';
                    } else {
                        artist = 'Sally';
                        artistSrc = 'sally.html';
                    };
                
                    let artistLink = document.createElement('a');
                    let artistLinkText = document.createTextNode('More from ' + artist);
                    artistLink.style.animation = `fadeUp 0.7s ease forwards`;
                    artistLink.appendChild(artistLinkText);
                    container.appendChild(artistLink);
                    artistLink.setAttribute('class', 'artist-link');
                    artistLink.setAttribute('href', artistSrc);
                    artistLink.setAttribute('id', 'current-artist');

            };
 
        });
    });
}



/* Close gallery image */

function closeImg() {
    document.querySelector('.img-window').remove();
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();
    document.querySelector('.artist-link').remove();
    

}
/* Change gallery image */

function changeImg(changeDir) {
    document.querySelector('#current-img').remove();
    document.querySelector('#current-artist').remove();

    let getImgWindow = document.querySelector('.img-window');
    let newImg = document.createElement('img');
    let calcNewImg;

    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }

    newImg.style.animation = `navLinkFade 0.7s ease forwards`;
    newImg.setAttribute('src', 'IMG/img' + calcNewImg + '.png');
    newImg.setAttribute('id', 'current-img');

    getLatestOpenedImg = calcNewImg;

    let newArtist = "";
    let newArtistSrc = "";

    if(calcNewImg === 1 ||
        calcNewImg === 7 ||
        calcNewImg === 3 ||
        calcNewImg === 20 ||
        calcNewImg === 8 ||
        calcNewImg === 12 ||
        calcNewImg === 14 ||
        calcNewImg === 18) {
            newArtist = 'Leanne';
            newArtistSrc = 'leanne.html';
    } else if(calcNewImg === 2 ||
        calcNewImg === 13 ||
        calcNewImg === 16||
        calcNewImg === 17) {
            newArtist = 'Jodie';
            newArtistSrc = 'jodie.html';
    } else if(calcNewImg === 4 ||
        calcNewImg === 10 ||
        calcNewImg === 11 ||
        calcNewImg === 15 ||
        calcNewImg === 21 ||
        calcNewImg === 23) {
            newArtist = 'Stephanie';
            newArtistSrc = 'stephanie.html';
    } else if(calcNewImg === 5 ||
        calcNewImg === 6 ||
        calcNewImg === 19) {
        newArtist = 'Katy';
        newArtistSrc = 'katy.html';
    } else {
        newArtist = 'Sally';
        newArtistSrc = 'sally.html';
    };

    let newArtistLink = document.createElement('a');
    let newLinkText = document.createTextNode('More from ' + newArtist);
    let container = document.body;

    getImgWindow.appendChild(newImg);
    newArtistLink.appendChild(newLinkText);
    container.appendChild(newArtistLink);
    newArtistLink.style.animation = `fadeUp 0.7s ease forwards`;

    
 
    newArtistLink.setAttribute('class', 'artist-link');
    newArtistLink.setAttribute('href', newArtistSrc);
    newArtistLink.setAttribute('id', 'current-artist');

    

}
