gsap.registerPlugin(ScrollTrigger);

// LENIS SMOOTH SCROLL
const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// HERO ANIMATION
gsap.from(".hero-content h1", {
  y: 100,
  opacity: 0,
  duration: 1.2
});

gsap.from(".description", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: .2
});

gsap.from(".buttons", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: .4
});

// ABOUT
gsap.from(".left", {
  scrollTrigger:{
    trigger:".about",
    start:"top 75%"
  },
  x:-100,
  opacity:0,
  duration:1
});

gsap.from(".glass", {
  scrollTrigger:{
    trigger:".about",
    start:"top 75%"
  },
  x:100,
  opacity:0,
  duration:1
});

// GALLERY
gsap.utils.toArray(".gallery-item").forEach((item)=>{

  gsap.from(item,{
    scrollTrigger:{
      trigger:item,
      start:"top 85%"
    },
    y:80,
    opacity:0,
    duration:1
  });

});

// ======================
// HERO SLIDER
// ======================

const slides = document.querySelectorAll(".slide");

let current = 0;

// PRIMEIRO SLIDE
slides[current].classList.add("active");

function nextSlide(){

  // slide atual vira prev
  slides[current].classList.remove("active");
  slides[current].classList.add("prev");

  // próximo slide
  current++;

  if(current >= slides.length){
    current = 0;
  }

  // limpa classes do próximo
  slides[current].classList.remove("prev");

  // ativa próximo
  slides[current].classList.add("active");

}

// troca automática
setInterval(nextSlide, 2000);