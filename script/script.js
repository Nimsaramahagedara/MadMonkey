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
    const menuIcon = document.getElementById('icon');
    const navItems = document.getElementById('nav-menu-items');
    var r = document.querySelector(':root');
    var yOffset = window.pageYOffset;
  
    if (yOffset >= 300) {
      r.style.setProperty('--NavbarBG', 'rgba(0, 0, 0, 0.5)');
      navItems.style.color = 'white';
      logo.style.filter = 'unset';
      menuIcon.style.color = 'white';
    } else {
      r.style.setProperty('--NavbarBG', 'rgba(0, 0, 0, 0.0)');
      navItems.style.color = 'black';
      logo.style.filter = 'invert()';
      menuIcon.style.color = 'black';
    }
  }
  
  window.addEventListener('scroll', fixNavigationBar);

      // Check if the device is a mobile device
      /*function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
      }
  
      // Autoplay the video on mobile devices
      function autoplayVideoOnMobile() {
        var video = document.getElementById('myVideo');
  
        if (isMobileDevice()) {
          video.play();
        }
      }
  
      // Loop the video when it ends
      function loopVideo() {
        var video = document.getElementById('myVideo');
        video.addEventListener('ended', function () {
          video.currentTime = 0;
          video.play();
        });
      }
  
      autoplayVideoOnMobile();
      loopVideo();*/
  
var video = document.getElementById('myVideo');
var source = document.getElementById('videoSource');
var userAgent = navigator.userAgent.toLowerCase();

if (userAgent.indexOf('firefox') !== -1) {
  source.src = './Resources/Mad Monkey/Intro MOV File 2.webm';
  video.load();
} else if (userAgent.indexOf('chrome') !== -1 || userAgent.indexOf('safari') !== -1) {
  source.src = './Resources/Mad Monkey/Intro MOV File 2.webm';
  video.load();
}else if (userAgent.indexOf('edg') !== -1) { // Check for 'edg' in user agent for Microsoft Edge
  source.src = './Resources/Mad Monkey/Intro MOV File 2.mp4';
  video.load();
  
}else {
  source.src = './Resources/Mad Monkey/Intro MOV File 2.mp4';
  video.load();
}

  
  