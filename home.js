const { A11y } = require('swiper/modules');

addEventListener('DOMContentLoaded', (event) => {
    //hero logo on home page animation
    $('[hero_logo_svg]').each(function (index) {
        let tl = gsap.timeline({});
        tl.startTime(0.8);
        tl.from($(this).find('path'), {
            autoAlpha: 0,
            yPercent: -100,
            duration: 0.4,
            ease: 'power2.out',
            stagger: {
                amount: 0.6,
                from: 'edges',
                ease: 'power2.in',
            },
        });
    });

    //homepage awards marquee
    $('.awards').each(function (index) {
        let tl = gsap.timeline({});
        tl.to($(this).find('.awards__wrp'), {
            xPercent: -100,
            duration: 90,
            repeat: -1,
            ease: 'none',
        });
    });

    // food marquee
    $('.h-food').each(function (index) {
        let tl = gsap.timeline({});
        tl.to($(this), {
            xPercent: -100,
            duration: 180,
            repeat: -1,
            ease: 'none',
        });

        $('.h-food').on('mouseenter', function () {
            gsap.to(tl, 0.6, {
                timeScale: 0,
                ease: 'power1.out',
                onComplete: function () {
                    tl.pause();
                },
            });
        });

        $('.h-food').on('mouseleave', function () {
            tl.play();
            gsap.to(tl, 0.6, {
                timeScale: 1,
                ease: 'power1.in',
                onComplete: function () {
                    tl.play();
                },
            });
        });
    });

    //home shop slider
    $('.swiper-component--shop').each(function (index) {
        const swiper = new Swiper($(this).find('.swiper')[0], {
            modules: [Navigation],
            slidesPerView: 1.2,
            spaceBetween: 20,
            speed: 400,
            a11y: true,
            mousewheel: {
                forceToAxis: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 1.5,
                },
                768: {
                    slidesPerView: 2.5,
                },
            },
            navigation: {
                nextEl: $(this).find('.swiper-button-next')[0],
                prevEl: $(this).find('.swiper-button-prev')[0],
            },
        });
    });

    //home news article slider
    $('.swiper-component--news').each(function (index) {
        const swiper = new Swiper($(this).find('.swiper')[0], {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            speed: 400,
            a11y: true,
            mousewheel: {
                forceToAxis: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
            },
            pagination: {
                el: $(this).find('.swiper-bullet-wrapper')[0],
                type: 'bullets',
                bulletActiveClass: 'is-active',
                bulletClass: 'swiper-bullet',
                bulletElement: 'button',
                clickable: true,
            },
            navigation: {
                nextEl: $(this).find('.swiper-next')[0],
                prevEl: $(this).find('.swiper-prev')[0],
            },
        });
    });
});
