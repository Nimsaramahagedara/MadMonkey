/*TOGGLE MENU*/
function menu() {
  const nav = document.getElementsByClassName("menu")[0];
  const icon = document.getElementById("icon");

  if (nav.style.visibility == "hidden" || nav.style.visibility == "") {
    icon.setAttribute("class", "fa-solid fa-bars-staggered icon");
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
  } else {
    nav.style.opacity = "0";
    nav.style.visibility = "hidden";
    icon.setAttribute("class", "fa-solid fa-bars icon");
  }
}
/*SCROLL FUNCTION*/
function smoothScrollToId(id){
  document.querySelector('#'+id).scrollIntoView({
      behavior: 'smooth'
  });
}

/*NAVIGATION BAR COLOR CHANGE WITH LOGO COLOR*/
function fixNavigationBar() {
  const logo = document.getElementById("logo");
  const menuIcon = document.getElementById("icon");
  const navItems = document.getElementById("nav-menu-items");
  var r = document.querySelector(":root");
  var yOffset = window.pageYOffset;

  if (yOffset >= 300) {
    r.style.setProperty("--NavbarBG", "rgba(0, 0, 0, 0.5)");
    navItems.style.color = "white";
    logo.style.filter = "unset";
    menuIcon.style.color = "white";
  } else {
    r.style.setProperty("--NavbarBG", "rgba(0, 0, 0, 0.0)");
   /* navItems.style.color = "black";
    logo.style.filter = "invert()";
    menuIcon.style.color = "black";*/
  }
}

window.addEventListener("scroll", fixNavigationBar);

/*VIDEO SOURCE CHANGE DEPEND ON THE BROWSER
var video2 = document.getElementById("small-video");
var source2 = document.getElementById("smallSource");
var userAgent = navigator.userAgent.toLowerCase();
if(userAgent.indexOf("chrome") !== -1){
  source2.src = "./Resources/Mad Monkey/Intro MOV File 2.mp4";
  video2.load();

}else if (userAgent.indexOf("chrome") !== -1 || userAgent.indexOf("firefox") !== -1) {
  source2.src = "./Resources/Mad Monkey/Intro MOV File 2.webm";
  video2.load();
} else {
  source2.src = "./Resources/Mad Monkey/Intro MOV File 2.mp4";
  video2.load();
}
*/