

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
