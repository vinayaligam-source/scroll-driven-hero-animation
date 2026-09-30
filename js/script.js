gsap.registerPlugin(ScrollTrigger);


/* =========================================
   TITLE LETTER ANIMATION
========================================= */

const titleLetters = document.querySelectorAll(
  ".hero-title span:not(.title-gap)"
);

const titleAnimation = gsap.timeline();


titleAnimation.fromTo(
  titleLetters,

  {
    opacity: 0,

    y: 50,

    rotateX: 70,

    filter: "blur(8px)"
  },

  {
    opacity: 1,

    y: 0,

    rotateX: 0,

    filter: "blur(0px)",

    duration: 0.8,

    stagger: 0.06,

    ease: "power3.out"
  }
);

/* =========================================
   INITIAL LOAD ANIMATION
========================================= */

const intro = gsap.timeline({
  defaults: {
    ease: "power3.out"
  }
});


/* -----------------------------------------
   HEADLINE
----------------------------------------- */

intro.fromTo(
  ".hero-title",

  {
    opacity: 0,
    y: 30
  },

  {
    opacity: 1,
    y: 0,
    duration: 1.2
  }
);


/* -----------------------------------------
   COUNTERS
----------------------------------------- */

intro.fromTo(
  ".stat",

  {
    opacity: 0,
    y: 25
  },

  {
    opacity: 1,
    y: 0,

    duration: 0.7,

    stagger: 0.2
  },

  "-=0.5"
);


/* -----------------------------------------
   CAR INTRO
----------------------------------------- */

intro.fromTo(
  ".car",

  {
    opacity: 0,

    scale: 0.7,

    x: 80
  },

  {
    opacity: 1,

    scale: 1,

    x: 0,

    duration: 1.2
  },

  "-=0.5"
);


/* =========================================
   SCROLL-DRIVEN CAR
========================================= */

const carAnimation = gsap.timeline({
  scrollTrigger: {

    trigger: ".hero",

    start: "top top",

    /*
      Hero stays active while scrolling.
      Car movement is directly connected
      to scroll position.
    */
    end: "+=100%",

    scrub: 1,

    pin: true,

    anticipatePin: 1
  }
});


/* -----------------------------------------
   CAR MOVEMENT
----------------------------------------- */

carAnimation.to(".car", {

  x: 300,

  y: 130,

  scale: 0.55,

  rotation: 8,

  ease: "none"

});


/* -----------------------------------------
   CIRCLE MOVEMENT
----------------------------------------- */

carAnimation.to(
  ".visual-circle",
  {
    rotation: 180,

    scale: 0.8,

    ease: "none"
  },

  "<"
);



/* =========================================
   MOUSE FOLLOW CAR
========================================= */

const car = document.querySelector(".car");

const moveX = gsap.quickTo(car, "x", {
  duration: 0.6,
  ease: "power3.out"
});

const moveY = gsap.quickTo(car, "y", {
  duration: 0.6,
  ease: "power3.out"
});

document.addEventListener("mousemove", (event) => {

  const mouseX = event.clientX / window.innerWidth - 0.5;
  const mouseY = event.clientY / window.innerHeight - 0.5;

  moveX(mouseX * 180);
  moveY(mouseY * 100);

});