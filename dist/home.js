(() => {
  // home.js
  addEventListener("DOMContentLoaded", (event) => {
    $("[hero_logo_svg]").each(function(index) {
      let tl = gsap.timeline({});
      tl.startTime(0.8);
      tl.from($(this).find("path"), {
        autoAlpha: 0,
        yPercent: -100,
        duration: 0.4,
        ease: "power2.out",
        stagger: {
          amount: 0.6,
          from: "edges",
          ease: "power2.in"
        }
      });
    });
    $(".awards").each(function(index) {
      let tl = gsap.timeline({});
      tl.to($(this).find(".awards__wrp"), {
        xPercent: -100,
        duration: 90,
        repeat: -1,
        ease: "none"
      });
    });
    $(".h-food").each(function(index) {
      let tl = gsap.timeline({});
      tl.to($(this), {
        xPercent: -100,
        duration: 180,
        repeat: -1,
        ease: "none"
      });
      $(".h-food").on("mouseenter", function() {
        gsap.to(tl, 0.6, {
          timeScale: 0,
          ease: "power1.out",
          onComplete: function() {
            tl.pause();
          }
        });
      });
      $(".h-food").on("mouseleave", function() {
        tl.play();
        gsap.to(tl, 0.6, {
          timeScale: 1,
          ease: "power1.in",
          onComplete: function() {
            tl.play();
          }
        });
      });
    });
    $(".swiper-component--shop").each(function(index) {
      const swiper = new Swiper($(this).find(".swiper")[0], {
        slidesPerView: 1.2,
        spaceBetween: 20,
        speed: 400,
        a11y: true,
        breakpoints: {
          480: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2.5
          }
        },
        navigation: {
          nextEl: $(this).find(".swiper-button-next")[0],
          prevEl: $(this).find(".swiper-button-prev")[0]
        }
      });
    });
    $(".swiper-component--news").each(function(index) {
      const swiper = new Swiper($(this).find(".swiper")[0], {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        speed: 400,
        a11y: true,
        mousewheel: {
          forceToAxis: true
        },
        breakpoints: {
          480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20
          }
        },
        pagination: {
          el: $(this).find(".swiper-bullet-wrapper")[0],
          type: "bullets",
          bulletActiveClass: "is-active",
          bulletClass: "swiper-bullet",
          bulletElement: "button",
          clickable: true
        },
        navigation: {
          nextEl: $(this).find(".swiper-next")[0],
          prevEl: $(this).find(".swiper-prev")[0]
        }
      });
    });
  });
})();
