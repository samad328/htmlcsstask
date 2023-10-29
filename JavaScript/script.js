
Splitting();
gsap.registerPlugin(ScrollTrigger);

(function() {

   
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
                rotate: 3
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
        edgeResistance:0.65,
        bounds: document.querySelector('.hero-Section'),
        throwProps:true,
        
        
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



   })();
    
  