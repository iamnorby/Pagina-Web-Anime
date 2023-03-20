/*MENU*/ 
const navMenu = document.getElementById ('nav-menu'),
      navToggle = document.getElementById('nav-Toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () =>  {
        navMenu.classList.add('show-menu')
    })
}


if (navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.navLink')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction) )

/*SWIPER  NUEVOS SLIDERS*/

let newSwiper = new Swiper (".new-swiper",{
    centeredSlides: true,
    slidesPerView: "auto", 
    loop: 'true',
    spaceBetween: 16
})

/* BACKGROUND HEADER*/

function scrollHeader(){
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*SCROLL SECTION*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset 
    sections.forEach(current =>  {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navM a[href*='+ sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.navM a[href*='+ sectionId + ']').classList.remove('active-link')
        }
    } )
}
window.addEventListener('scroll', scrollActive)

/*SCROLL UP*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*ANIMATIONS */
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300
})
sr.reveal('.home-swiper, .new-swiper, .newslc')
sr.reveal('.categorydata, .footercontent', {interval: 100})
sr.reveal('.aboutdata, .discountimg', {origin: left})
sr.reveal('.aboutimg, .discountdata', {origin: left})


