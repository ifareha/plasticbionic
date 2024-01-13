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

function page1(){
  gsap.from(".box",{
    opacity: 0,
    scale: 0,
    duration: 0.4,
    // ease: "back.out",
    stagger: 0.3 
  })
  gsap.from('.text h1',{
    y:50,
    opacity: 0,
    duration: 0.5,
    delay:1.5
  })
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      markers: true,
      scrub: 1,
      start: "top 0%",
      end: "80% end",
      stagger: 0,
      pin: true,
    },
  });
  tl
  .to(
    "#box1",
    {
      left: "-20%",
      duration: 9,
      top: "-100%",
    },
    "anim"
  )
    .to(
      "#box2",
      {
        left: "5%",
        top: "-150%",
        duration: 5,
      },
      "anim"
    )
    .to(
      "#box3",
      {
        top: "-100%",
        right: "40%",
        duration: 6,
      },
      "anim"
    )
    .to(
      "#box4",
      {
        top: "100%",
        left: "-100%",
        duration: 9,
      },
      "anim"
    )
    .to(
      "#box5",
      {
        left: "150%",
        top: "100%",
        duration: 8,
      },
      "anim"
    )
    .to(
      "#box6",
      {
        left: "-100%",
        top: "150%",
        duration: 8,
      },
      "anim"
    )
    .to(
      "#box7",
      {
        left: "80%",
        top: "-150%",
        duration: 8,
      },
      "anim"
    )
  
    .to(".page1 h2", {
      opacity: 0,
      scale: 0,
      duration: 2,
    }, 'anim')
  
    .to(".foot .footl", {
      height: "100%",
      duration: 15,
    })
  
}
page1();
function page2() {
  var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.page2',
        scroller:'.main',
        // markers: true,
        start: 'top 0',
        end: 'end -100%',
        scrub: 1
    }
  });
  tl2
  .from(".page2 h1 ", {
   y:50,
   opacity:0,
   duration:0.5
  })

  .to(".foot-2 .left-2", {
    height: "100%",
    duration: 15,
  }, 'border')

  .to(".foot-2 ", {
    width: "100%",
    duration: 15,
  }, 'border')


}
page2();
  var leftImage = document.querySelector(".left3").addEventListener("mouseenter", function(){
     document.querySelector("#img1").style.scale = '0.9';
  })
  
  var leftImage = document.querySelector( ".left3").addEventListener("mouseleave", function(){
    document.querySelector("#img1").style.scale = '0.6';
 })

 var rightImage = document.querySelector(".right3").addEventListener("mouseenter", function(){
    document.querySelector("#img2").style.scale = '0.9';
 })
 
 var rightImage = document.querySelector(".right3").addEventListener("mouseleave", function(){
   document.querySelector("#img2").style.scale = '0.6';
})
function page3(){
  var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: '.page4',
        scroller:'.main',
        // markers: true,
        start: 'top 0',
        end: 'end -100%',
        scrub: 1,
        pin: true
    }
  });
  tl3
  .to(".eight", {
   scale: '4',
   duration: 5,
   transform: 'rotate(40deg)',
   x:'90%',
   y:'50%',
  }, 'rotate')
  .to("h2", {
    opacity:0,
    duration: 0.2
   }, 'rotate')

}
page3();

function page4(){
  var tl = gsap.timeline();
  
  tl.to(".scroll .page5 .heading",{
      y : 500,
       scrollTrigger :{
          trigger : ".scroll .page5",
          scroller : ".main",
          start : " top 0",
          end : "top -300",
          scrub : 2,
         }
  })
  
  .to(".scroll .page5",{
      height : "50vh",
      duration : .5,
       scrollTrigger :{
          trigger : ".scroll .page5",
          scroller : ".main",
          start : " top 0",
          end : "top -300",
          scrub : 2,
         }
  })
  .to(".scroll .page6 .heading",{
      y : 500,
      duration : .5,
       scrollTrigger :{
          trigger : ".scroll .page6",
          scroller : ".main",
          start : " top 0",
          end : "top -300",
          scrub : 2,
         }
  })
  .to(".scroll .page6",{
      height : "50vh",
      duration : .5,
      scrollTrigger :{
          trigger : ".scroll .page6",
          scroller : ".main",
          start : " top -300",
          end : "top -300",
          scrub : 2,
         }
  })
  .to(".scroll .page7 .heading",{
      y : 500,
       scrollTrigger :{
          trigger : ".scroll .page7",
          scroller : ".main",
          start : " top 0",
          end : "top -400",
          scrub : 2,
         }
  })
  .to(".scroll .page7",{
      height : "50vh",
      duration : .5,
      scrollTrigger :{
          trigger : ".scroll .page7",
          scroller : ".main",
          start : " top 0",
          end : "top -300",
          scrub : 2,
         }
  })
  }
  page4();

  function page9(){
gsap.to(".move h1",{
  x:'-100%',
  duration:50,

})
var move =  document.querySelector(" .page9 .move");
var cur = document.querySelector(".cur");
move.addEventListener("mouseenter", function(){
  cur.style.opacity = 1;
  cur.style.scale = 1;
})
move.addEventListener("mousemove", function(dets){
  cur.style.left = dets.x + 'px'
})
move.addEventListener("mouseleave", function(){
  cur.style.opacity = 0;
  cur.style.scale = 0;
});


var para = document.querySelector(".page10 p");
var paraText = para.textContent;

var splittedText = paraText.split(" ");

var clutter = ""

splittedText.forEach(function(elem){
 clutter += `<span> ${elem} </span>`;
})
para.innerHTML = clutter;

gsap.to(" .page10 p span",{
 color: 'rgb(102, 101, 101) ',
    stagger: 4,
  scrollTrigger: {
    trigger: '.page10',
    scroller: '.main',
    scrub: true,
    start: '-45% 0',
    end: 'top -50%',
  }
})
  }
  page9();

  function page11(){
    gsap.from(".page11 .text-center11",{
     opacity: 0,
     duration:0.5,
     scrollTrigger:{
       trigger: '.page11',
       scroller: '.main',
      //  markers : true,
       start: '-74% 0'
     }
    })
     }
     page11()
  function page12(){
 gsap.from(".page12 .text-center11",{
  opacity: 0,
  duration:0.5,
  scrollTrigger:{
    trigger: '.page12',
    scroller: '.main',
    start: '-74% 0'
  }
 })
  }
  page12()
  function footer(){
 gsap.from(".page15 img",{
  y: -200,
  duration:0.5,
  opacity:0,
  rotateX: '25deg',
  scrollTrigger:{
    trigger: '.page15',
    scroller: '.main',
    start: '-150% 0'
  }
 })
  }
  footer()