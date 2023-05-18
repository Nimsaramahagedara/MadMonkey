function menu(){
    const nav =  document.getElementsByClassName("menu")[0];
    const icon = document.getElementById('icon');
 
    if(nav.style.visibility == "hidden" || nav.style.visibility == ""){
         icon.setAttribute("class","fa-solid fa-bars-staggered icon");
         nav.style.visibility = "visible";
    }else{
         nav.style.visibility = "hidden";
         icon.setAttribute("class","fa-solid fa-bars icon");
    }
 }

 function smoothScrollToId(id) {
     const element = document.getElementById(id);
     if (element) {
       const elementPosition = element.getBoundingClientRect().top;
       const startPosition = window.pageYOffset;
       const distance = elementPosition - startPosition;
       const duration = 500; // set the duration of the scroll animation in milliseconds
       let startTime = null;
   
       function scrollAnimation(currentTime) {
         if (startTime === null) startTime = currentTime;
         const timeElapsed = currentTime - startTime;
         const scroll = easeInOutQuad(timeElapsed, startPosition, distance, duration);
         window.scrollTo(0, scroll);
         if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
       }
   
       function easeInOutQuad(t, b, c, d) {
         t /= d/2;
         if (t < 1) return c/2*t*t + b;
         t--;
         return -c/2 * (t*(t-2) - 1) + b;
       }
   
       requestAnimationFrame(scrollAnimation);
     }
   }
  

   function fixNavigationBar() {
    const logo = document.getElementById('logo');
    const navItems = document.getElementById('nav-menu-items');
    var r = document.querySelector(':root');
    var yOffset = window.pageYOffset;
  
    if (yOffset >= 300) {
      r.style.setProperty('--NavbarBG', 'rgba(0, 0, 0, 0.5)');
      navItems.style.color = 'white';
      logo.style.filter = 'unset';
    } else {
      r.style.setProperty('--NavbarBG', 'rgba(0, 0, 0, 0.0)');
      navItems.style.color = 'black';
      logo.style.filter = 'invert()';
    }
  }
  
  window.addEventListener('scroll', fixNavigationBar);
  
  
  
  