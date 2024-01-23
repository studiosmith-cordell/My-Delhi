import './global.css'
import SplitType from 'split-type'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);

let typeSplit = new SplitType('[text-split]', {
    types: 'words, chars',
    tagName: 'span'
});
  
$('[txt-slide-up]').each(function (index) {
    let tl = new gsap.timeline({paused: true});
    tl.from($(this).find('.char'), {yPercent: 110, duration: 0.6, ease: 'back.out(2)', stagger: {amount: 0.4, ease: 'power1.in'}});
    tl.from($(this).find('.hindi'), {opacity: 0, duration: 1, ease: 'power2.inout'},'-=0.3');

    ScrollTrigger.create({
      trigger: $(this),
      start: 'top bottom',
      onEnter: () => {
        tl.pause(0);
      }
    });
    
    ScrollTrigger.create({
      trigger: $(this),
      start: 'top 80%',
      onEnter: () => tl.play()
    });
});
  
gsap.set('[txt-slide-up]', { opacity: 1 });

  $('[slide-from-left]').each(function (index) {
    let tl = new gsap.timeline({paused: true});
    tl.from($(this), {xPercent: -50, duration: 1, opacity: 0, ease: 'power2.out'});

    ScrollTrigger.create({
      trigger: $(this),
      start: 'top bottom',
      onEnter: () => {
        tl.pause(0);
      }
    });
    
    ScrollTrigger.create({
      trigger: $(this),
      start: 'top 60%',
      onEnter: () => tl.play()
    });
});
  
$('[slide-from-right]').each(function (index) {
    let tl = new gsap.timeline({paused: true});
    tl.from($(this), {xPercent: 50, duration: 1, opacity: 0, ease: 'power2.out'});

    ScrollTrigger.create({
      trigger: $(this),
      start: 'top bottom',
      onEnter: () => {
        tl.pause(0);
      }
    });
    
    ScrollTrigger.create({
      trigger: $(this),
      start: 'top 60%',
      onEnter: () => tl.play()
    });
});
  
$('p, [gsap="fade"]').each(function (index) {
    let tl = new gsap.timeline({paused: true});
    tl.from($(this), {duration: 1, opacity: 0, ease: 'power2.inout'});

    ScrollTrigger.create({
      trigger: $(this),
      start: 'top bottom',
      onEnter: () => {
        tl.pause(0);
      }
    });
    
    ScrollTrigger.create({
      trigger: $(this),
      start: 'top 75%',
      onEnter: () => tl.play()
    });
});

$('[gsap="grow"]').each(function (index) {
  let tl = new gsap.timeline({paused: true});
  tl.from($(this), {duration: 1, scale: 0.8, opacity: 0, ease: 'power2.out'});

  ScrollTrigger.create({
    trigger: $(this),
    start: 'top bottom',
    onEnter: () => {
      tl.pause(0);
    }
  });
  
  ScrollTrigger.create({
    trigger: $(this),
    start: 'top 75%',
    onEnter: () => tl.play()
  });
});
  
// Nav menu link animation with menu open and close
let menuTl = new gsap.timeline({paused: true});
menuTl.from($('.nav').find('.nav__link, .nav__star'), {yPercent: 110, opacity: 0, duration: 0.6, ease: 'back.out(2)', stagger: {amount: 0.4, ease: 'power1.in'}});

$('.menu-btn').on('click', function () {
  if ($(this).attr('aria-expanded') === 'false') {
    setTimeout(function () {
      menuTl.play();
    }, 400);
    $(this).attr('aria-expanded', 'true');
    $('.nav').attr('aria-hidden', 'false');
  } else {
    menuTl.reverse();
    $(this).attr('aria-expanded', 'false');
    $('.nav').attr('aria-hidden', 'true');
  }
});

// Booking modal swiper

$('.swiper-component--booking').each(function (index) {
  const swiperBook = new Swiper($(this).find('.swiper')[0], {
    modules: [Pagination],
    slidesPerView: 1.25,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    speed: 400,
    allowTouchMove: false,
    pagination: {
        el: $(this).find('.swiper-bullet-wrapper')[0],
      type: 'bullets',
      bulletActiveClass: 'is-active',
      bulletClass: 'swiper-bullet--yellow',
      bulletElement: 'button',
      clickable: true
      }
  });
});

// Smooth scroll
let lenis;
if (Webflow.env("editor") === undefined) {
  lenis = new Lenis({
    lerp: 0.12,
    wheelMultiplier: 1,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false,
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

$("[data-lenis-start]").on("click", function () {
  lenis.start();
});

$("[data-lenis-stop]").on("click", function () {
  lenis.stop();
});

$("[data-lenis-toggle]").on("click", function () {
  $(this).toggleClass("stop-scroll");
  if ($(this).hasClass("stop-scroll")) {
    lenis.stop();
  } else {
    lenis.start();
  }
});