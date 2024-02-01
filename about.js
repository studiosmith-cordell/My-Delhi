addEventListener("DOMContentLoaded", (event) => {
  //hero logo on about page animation
  $('[hero_logo_svg]').each(function (index) {
    let tl = gsap.timeline({});
    tl.startTime(0.2);
    tl.from($(this).find('path'), {
      autoAlpha: 0,
      yPercent: -100,
      duration: 0.4,
      ease: 'power2.out',
      stagger: {
        amount: 0.6,
        from: "edges",
        ease: 'power2.in'
      }
    });
  });

  // clip-path morph
  const clipPaths = {
    start: 'polygon(15% 50%, 50% 20%, 85% 50%, 50% 80%)',
    end: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  }

  $('[gsap="mask"]').each(function (index) {
    let tl = new gsap.timeline({
      scrollTrigger: {
        trigger: $('[about-track]'),
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.4 
      },
      defaults: {
        ease: 'none'
      }
    });
    tl.fromTo($(this), {
      'clip-path': clipPaths.start
    }, {
      'clip-path': clipPaths.end
    });
  });

  // food marquee
  $('.h-food').each(function (index) {
    let tl = gsap.timeline({});
    tl.to($(this).find('.h-food__list'), {
      xPercent: -100,
      duration: 90,
      repeat: -1,
      ease: 'none'
    });
    
    $('.h-food').on("mouseenter", function () {
      gsap.to(tl, 0.6, {
        timeScale: 0,
        ease: "power1.out",
        onComplete: function () {
          tl.pause();
        }
      });
    });

    $('.h-food').on("mouseleave", function () {
      tl.play();
      gsap.to(tl, 0.6, {
        timeScale: 1,
        ease: "power1.in",
        onComplete: function () {
          tl.play();
        }
      });
    });
  });
});