function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  loco();

  gsap.from(".page1 h1",{
    opacity:0,
    y:100,
    duration:1,
    stagger:0.3
  })
  gsap.from(".page1 p",{
    opacity:0,
    y:100,
    duration:1,
   delay:0.7
  })
  gsap.from(" .nav",{
    y:70,
    opacity:0,
    duration:1,
    delay: 0.5,
  })
  gsap.from(" .nav-2 h4",{
    y:70,
    opacity:0,
    duration:1,
    stagger:0.7,
    delay: 0.5,
  })
  function main(){
var tl = gsap.timeline()

tl.to(".page1 .span",{
   y:500,
  duration:.1,
  scrollTrigger:{
      trigger: '.page1',
      scroller:'.main',
      // markers: true,
      start: 'top 0',
      end: 'end -100%',
      scrub: 1,
      // pin: true
  }
})

tl.to(".page1",{
 
    height:'5vh',
    duration:.1,
    scrollTrigger:{
        trigger: '.page1',
        scroller:'.main',
        // markers: true,
        start: 'top 0',
        end: 'end -100%',
        scrub: 1,
        // pin: true
    }
})
 tl.to(".page2 span",{
  top: '100%',
  duration:.9,
  scrollTrigger:{
      trigger: '.page2',
      scroller:'.main',
      start: '-110% 0',
      end: 'end end',
      scrub: 1
  }
 })
tl.to(".page2",{
   height:'20vh',
    duration:.1,
    scrollTrigger:{
        trigger: '.page2',
        scroller:'.main',
        start: '-60% 0',
        end: 'end -100%',
        scrub: 1,

    }
})
tl.to(".page3 span",{
  top: '150%',
  duration:.1,
  scrollTrigger:{
      trigger: '.page3',
      scroller:'.main',
      start: '-180% 0',
      end: 'end end',
      scrub: 1
  }
 })
tl.to(".page3",{
  height:'20vh',
   duration:.1,
   scrollTrigger:{
       trigger: '.page3',
       scroller:'.main',
      //  markers: true,
       start: '-50% 0',
       end: 'end -100%',
       scrub: 1,
   }
})

tl.to(".page4 span",{
  top:'160%',
  duration:.1,
  scrollTrigger:{
      trigger: '.page4',
      scroller:'.main',
      start: '-240% 0',
      end: 'end end',
      scrub: 1,
      // markers: true
  }
 })
tl.to(".page4",{
  height:'40vh',
   duration:.1,
   scrollTrigger:{
       trigger: '.page4',
       scroller:'.main',
      //  markers: true,
       start: '-60% 0',
       end: 'end end',
       scrub: 1,
   }
})

tl.to(".page5 span",{
  top:'180%',
  duration:.1,
  scrollTrigger:{
      trigger: '.page5',
      scroller:'.main',
      start: '-280% 0',
      end: 'end end',
      scrub: 1,
      // markers: true
  }
 })
tl.to(".page5",{
  height:'20vh',
   duration:.1,
   scrollTrigger:{
       trigger: '.page5',
       scroller:'.main',
      //  markers: true,
       start: '-60% 0',
       end: 'end end',
       scrub: 1,
   }
})

tl.to(".page6 span",{
  top:'250%',
  duration:.1,
  scrollTrigger:{
      trigger: '.page6',
      scroller:'.main',
      start: '-320% 0',
      end: 'end end',
      scrub: 1,
  }
 })
tl.to(".page6",{
  height:'20vh',
   duration:.1,
   scrollTrigger:{
       trigger: '.page6',
       scroller:'.main',
       start: '-60% 0',
       end: 'end end',
       scrub: 1,
   }
})
  }
  main();