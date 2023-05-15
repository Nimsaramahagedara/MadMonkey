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