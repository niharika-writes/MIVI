

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(el => el.addEventListener('click', linkAction));


const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}

window.addEventListener('scroll', blurHeader);


let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    autoplay:{
        delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        }
    }
});


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal(`.home__social, .favorite__container, .sponsor__container, .footer`);
sr.reveal(`.home__title span:nth-child(1)`, { origin: 'left', opacity: 1 });
sr.reveal(`.home__title span:nth-child(3)`, { origin: 'right', opacity: 1 });
sr.reveal(`.home__tooltip, .home__button, .model__button`, { origin: 'bottom' });
sr.reveal(`.about__data`, { origin: 'left' });
sr.reveal(`.about__img, .model__tooltip`, { origin: 'right' });


var body = document.querySelector("body")
var cursor= document.querySelector("#cursor")

body.addEventListener("mousemove",function(dets){

    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
        



    })
})

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showSlide(i);
    });
});

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

showSlide(index);
