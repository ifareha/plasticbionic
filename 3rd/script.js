gsap.from(".box",{
    y:100,
   opacity:0,
   stagger: 0.2,
    duration: 1
})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.home',
        scroll: 'body',
        scrub:1,
        start: 'top 0%',
        end:'80% end',
        stagger: 0,
       pin:true
       }
});
tl
.to('#box1',{
    left:'-20%',
    duration: 9,
    top:'-100%'
}, 'num')

.to('#box2',{
    left:'-100%',
    top:"100",
    duration: 5
},'num')

.to('#box3',{
    top:'-100%',
    right:'40%',
    duration: 6
},'num')

.to('#box4',{
    top:'100%',
    left:'-100%',
    duration: 9
},'num')

.to('#box5',{
    left:'100%',
    top:'100%',
    duration: 8
},'num')

.to('#box6',{
   left:'10%',
   top:'-100%',
    duration: 8
},'num')

.to('.text #new',{
   right:'52%',
     duration: 5
 }, 'num')

 .to('.text #old',{
    top:'-150%',
      duration: 8
  }, 'num')

  .to('.text h2',{
    color:'yellow',
      duration: 3,
      stagger:1
  }, 'num')

  gsap.from('.text h1',{
    y:20,
      duration: 3,
      opacity:0 ,
     stagger:0.2
  })


  var para = document.querySelector("p");
  var paraText = para.textContent;

  var splittedText = paraText.split("");

  var clutter = ""
  splittedText.forEach(function(elem){
    clutter += `<span> ${elem} </span>`;
  })
  para.innerHTML = clutter;
  gsap.to("p span",{
    color: 'white',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.page1',
      scroller: '.main',
      scrub: true,
      start: '-37% 0',
      markers: true
    }
  })