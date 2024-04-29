var tl = gsap.timeline();
var h1 =document.querySelectorAll("#page2 h1");
var h1_2nd = document.querySelectorAll("#page3 h1");
var left = document.querySelectorAll("#page2 #content2 #left");

function loco()
{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

tl.from("#page1 #content",{
    y: "-1000px",
    duration:1
})

tl.to("#page1 img",{
    
        height: "100%",
        width: "100%",
        duration: 1,
        // delay: 1
    
})

tl.from("nav button, nav i",{
    y: "-1000px",
    stagger: 0.1,
    duration: 0.6
    // scrub: true
})

h1.forEach(function(elem){
    var h1Text = elem.textContent;
    var splittedText = h1Text.split("");
    var clutter = "";
    splittedText.forEach(function(e){
        clutter += `<span>${e}</span>`;
        console.log(clutter)
    })
    elem.innerHTML = clutter;
    // console.log(clutter)
})

gsap.to("#page2 h1 span",
{
    
        color: "#E3E3C4",
        stagger: 0.1,
        scrollTrigger:{
            trigger: "#page2 h1",
            scroller: "body",
            // markers: true,
            start: "top 40%",
            scrub: 5,
        }
    
})


h1_2nd.forEach(function(elem)
{
    var h1_2ndtext = elem.textContent;
    var splitted_2ndtext = h1_2ndtext.split("");
    var clutter2 = "";

    splitted_2ndtext.forEach(function(e)
    {
        clutter2 += `<span>${e}</span>`;
    })
    
    elem.innerHTML = clutter2;
})

gsap.to("#page3 h1 span",{
    color: "#434B34",
    stagger: 0.1,

    scrollTrigger:
    {
        trigger: "#page3 h1",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "-100px",
        scrub:5
    }
})

tl.from("#left",{
    opacity: 0,
    y: "30%",
    // stagger: 0.2,
    scrollTrigger:{
    trigger: "#left",
    scroller: "body",
    // markers: true,
    scrub: 5
    }
})

tl.from("#right img",{
    opacity: 0,
    y: "30%",
    // stagger: 0.1,
    scrollTrigger:{
    trigger: "#right img",
    scroller: "body",
    scrub: 5
    }
})

tl.from("#page4 .rooms-inner",{
    opacity: 0.4,
    y: "40%",
    stagger: 0.1,
    scrollTrigger:{
    trigger: "#page4 .rooms-inner",
    scroller: "body",
    scrub: 5
    }
})

gsap.to("#page5 img",{
    // height: "100vh",
    y:"-40%",
    scrollTrigger:{
        trigger:"#page5 img",
        scroller: "body",
        scrub: 5,
        // markers: true,

    }

})

gsap.to("#page6",{
    y:"-30%",
    scrollTrigger:{
        trigger:"#page6",
        scroller: "body",
        scrub: 5,
        // markers: true,

    }

})

gsap.to("#page2",{
    y:"-30%",
    scrollTrigger:{
        trigger:"#page2",
        scroller: "body",
        scrub: 5,
        // markers: true,

    }

})

gsap.from("#page5 #nature",{
    opacity: 0,
    y: "100px",
    scrollTrigger:{
        trigger:"#page5 img",
        scroller: "body",
        scrub: 5,
        // markers: true,
        start: "top 30%",
        end: "top -20%"
    }
})
