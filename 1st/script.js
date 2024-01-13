gsap.to(".home .text h1",{
    transform: 'translateX(-100%)',

    fontWeight: '100',
    scrollTrigger: {
        trigger: '.home',
        scroller: 'body',
        start: 'top 0',
        end: 'end -200%',
        markers: true,
        scrub: true,
        pin: true
    }
} )