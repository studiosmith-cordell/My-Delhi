
    $('[hero_logo_svg]').each(function (index) {
      let tl = gsap.timeline({});
    tl.startTime(0.8);
    tl.from($(this).find('path'), {autoAlpha:0, yPercent: -100, duration: 0.4, ease: 'power2.out', stagger: {amount: 0.6, from: "edges", ease:'power2.in'}});
  });
  
  $('.awards').each(function (index) {
      let tl = gsap.timeline({});
    tl.to($(this).find('.awards__wrp'), {xPercent: -100, duration: 90, repeat: -1, ease: 'none'});
  });
  
  $('.swiper-component--shop').each(function (index) {
    const swiper = new Swiper($(this).find('.swiper')[0], {
      slidesPerView: 2.5,
      spaceBetween: 20,
      speed: 400,
      grabCursor: true,
      loop: true,
      mousewheel: {
        forceToAxis: true
      }
    });
      });
  
  $('.swiper-component--news').each(function (index) {
    const swiper = new Swiper($(this).find('.swiper')[0], {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      speed: 400,
      pagination: {
          el: $(this).find('.swiper-bullet-wrapper')[0],
        type: 'bullets',
        bulletActiveClass: 'is-active',
        bulletClass: 'swiper-bullet',
        bulletElement: 'button',
        clickable: true
        }
    });
      });
  
