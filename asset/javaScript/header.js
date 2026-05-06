
/* ##############    JavaScript for Signup/in    ############## */

function showSingup(){
    document.querySelector(".signup-back-container").style.display = "block";
    document.querySelector(".signup-front-container").style.display = "block";
    document.querySelector(".signin-front-container").style.display = "none";
    document.querySelector(".forget-front-container").style.display = "none";
}
function closeSingup(){
    document.querySelector(".signup-back-container").style.display = "none";
}
function showSingin(){
    document.querySelector(".signin-front-container").style.display = "block";
    document.querySelector(".signup-front-container").style.display = "none";
}
function showforget(){
    document.querySelector(".forget-front-container").style.display = "block";
    document.querySelector(".signin-front-container").style.display = "none";
}

/* ##############    JavaScript for Header    ############## */

window.onscroll = function() {scrollFunction()};
function sidemenuOpen(){
  let elem = document.getElementById("sidebarID"),
  style = window.getComputedStyle(elem),
  top = style.getPropertyValue("left");
  elem.style.left = "0%";
}
function sidemenuClose(){
  let elem = document.getElementById("sidebarID"),
  style = window.getComputedStyle(elem),
  top = style.getPropertyValue("left");
  elem.style.left = "-60%";
}
function sidemenuShowSingup(){
  let elem = document.getElementById("sidebarID");
  // elem.style.display = "none";
  style = window.getComputedStyle(elem),
  top = style.getPropertyValue("left");
  elem.style.left = "-60%";
  showSingup();
} 

function scrollFunction() {
  if (screen.width>740) {
      if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 270){
        document.querySelector(".fix-navbar-container").style.display = "block";
        document.querySelector(".bottom-navbar-container").style.display = "none";
        document.querySelector(".fix-navbar-container").style.top = "50px";
        document.querySelector(".nav-container").style.backgroundColor = "rgba(0, 0, 0,0.9)";
      }
      else{
        document.querySelector(".fix-navbar-container").style.display = "none";
        document.querySelector(".bottom-navbar-container").style.display = "block";
        document.querySelector(".fix-navbar-container").style.top = "0px";
        document.querySelector(".nav-container").style.backgroundColor = "rgba(0, 0, 0,0.2)";
      }
    
  } else {
    if (document.body.scrollTop > 200|| document.documentElement.scrollTop > 200) {
        // document.querySelector(".fix-navbar-container").style.top = "50px";
        document.querySelector(".nav-container").style.backgroundColor = "rgba(0, 0, 0,0.9)";
      } else {
        // document.querySelector(".fix-navbar-container").style.top = "-50px";
        document.querySelector(".nav-container").style.backgroundColor = "rgba(0, 0, 0,0.2)";
      } 
  }
}



