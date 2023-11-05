
Splitting();
gsap.registerPlugin(ScrollTrigger);
circleRotate()

function preloader(){
  const tl = gsap.timeline();

  tl.to("body", {
    overflow: "hidden"
  })
    .to(".preloader .text-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut"
    })
    .from(".preloader .text-container h5", {
      duration: 1.5,
      delay: 1,
      y: 100,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut"
    })
    .to(".preloader .text-container h5", {
      duration: 1.2,
      y: 100,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut"
    })
    .to(".preloader", {
      duration: 1.5,
      height: "0vh",
      ease: "Power3.easeOut"
    })
    .to(
      "body",
      {
        overflow: "auto"
      },
      "-=2"
    )
    .to(".preloader", {
      display: "none"
    });
  
}
preloader()

   
    function Navbar(){
        $(document).ready(function() {
            // Toggle menu on click
            $("#menu-toggler").click(function() {
              toggleBodyClass("menu-active");
            });
          
            function toggleBodyClass(className) {
              document.body.classList.toggle(className);
            }
          
           });
    }
    Navbar()


    function navBar(){
      var lastScrollTop; // This Varibale will store the top position

      navbar = document.getElementById('navbar'); // Get The NavBar
      
      window.addEventListener('scroll',function(){
       //on every scroll this funtion will be called
        
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        //This line will get the location on scroll
        
        if(scrollTop > lastScrollTop){ //if it will be greater than the previous
          navbar.style.top='-80px';
          //set the value to the negetive of height of navbar 
        }
        
        else{
          navbar.style.top='0';
        }
        
        lastScrollTop = scrollTop; //New Position Stored
      });
    }
    navBar()
    
   function cursor(){
    // UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
   }
   cursor()


    function scroll(){
        
        const fx18Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect18]')];
        const fx19Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect19]')];

        fx18Titles.forEach(title => {
            
            const chars = title.querySelectorAll('.char');
            
            chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
            
            gsap.fromTo(chars, { 
                'will-change': 'opacity, transform', 
                opacity: 0,
                z: -800
            }, 
            {
                ease: 'back.out(1.2)',
                opacity: 1,
                z: 0,
                stagger: 0.04,
                // scrollTrigger: {
                //     trigger: title,
                //     start: 'top bottom',
                //     end: 'bottom top',
                //     scrub: true,
                // }
            });
    
        });
        fx19Titles.forEach(title => {
            
            const chars = title.querySelectorAll('.char');
            
            chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
            
            gsap.fromTo(chars, { 
                'will-change': 'opacity, transform', 
                opacity: 0,
                z: -800
            }, 
            {
                ease: 'back.out(1.2)',
                opacity: 1,
                z: 0,
                stagger: 0.04,
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });
    
        });
       
    
    }
    scroll()
    

    function paragraphAnim(){
        const fx11Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect11]')];
        const fx16Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect16]')];

        fx11Titles.forEach(title => {
        
            const chars = title.querySelectorAll('.char');
            let wrapElements=(chars, 'span', 'char-wrap');
    
            gsap.fromTo(chars, { 
                'will-change': 'transform', 
                transformOrigin: '0% 50%',
                xPercent: 105,
                opacity:0
            }, 
            {
                duration: 0.6,
                ease: 'expo',
                xPercent: 0,
                stagger: 0.01,
                opacity:1,
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'top top+=10%',
                    // toggleActions: "play resume resume reset",
                }
            });
    
        });


        fx16Titles.forEach(title => {
        
            gsap.fromTo(title, {
                transformOrigin: '0% 50%',
               
            }, {
                ease: 'none',
                rotate: 0,
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            });
    
            gsap.fromTo(title.querySelectorAll('.word'), {
                'will-change': 'opacity',
                opacity: 0.1
            }, 
            {
                ease: 'none',
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom-=20%',
                    end: 'center top+=20%',
                    scrub: true,
                }
            });
    
        });
    
    }
    paragraphAnim()
  
   
    function draggable(){
        gsap.registerPlugin(Draggable);
        Draggable.create(".ball", {type:"x,y",
        bounds: document.querySelector('.hero-Section'),
        
        
        
        });
        }
    draggable()

function imageReveal(){

    let revealContainers = document.querySelectorAll(".reveal");
    
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
        //   toggleActions: "restart none none reset"
        }
      });
    
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out,
        opacity:0.3
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        opacity:1,
        ease: Power2.out
      });
    });
    

}
imageReveal()



function circleRotate(){
  // Select the text you want to make it circular
const text = document.querySelector(".circular-text .text")

// Make the selected text circler with CircleType
// you can find the full docs here: https://circletype.labwire.ca/
const rotate = new CircleType(text).radius(65)

// Add a scroll listener to the window object and rotate the selected text according to the scroll
// we used * 0.15 to make the rotation looks smoother
window.addEventListener("scroll", function(){
  text.style.transform=`rotate(${window.scrollY * 0.15}deg)`
})
}

circleRotate()



/**
* Scrolltrigger Scroll Letters Home
*/
function initScrollLetters() {
  // Scrolling Letters Both Direction
  // https://codepen.io/GreenSock/pen/rNjvgjo
  // Fixed example with resizing
  // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

  let direction = 1; // 1 = forward, -1 = backward scroll

  const roll1 = roll(".big-name .name-wrap", {duration: 60}),
        roll2 = roll(".rollingText02", {duration: 60}, true),
        scroll = ScrollTrigger.create({
          trigger: document.querySelector('[data-scroll-container]'),
          onUpdate(self) {
            if (self.direction !== direction) {
              direction *= -1;
              gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
            }
          }
        });

  // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
  function roll(targets, vars, reverse) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() { 
              this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            }
          }), 
          elements = gsap.utils.toArray(targets),
          clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
          }),
          positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
    positionClones();
    elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
    window.addEventListener("resize", () => {
      let time = tl.totalTime(); // record the current time
      tl.totalTime(0); // rewind and clear out the timeline
      positionClones(); // reposition
      tl.totalTime(time); // jump back to the proper time
    });
    return tl;
  }

}
initScrollLetters()

    
  