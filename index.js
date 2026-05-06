topPlaceSB("topPlace");
hotelSB("hotel");
resturentSB("restaurant");


function topPlaceSB(x) {
  let next = document.getElementsByClassName(x+"Nextbtn");
  let prev = document.getElementsByClassName(x+"Prvbtn");
  
  for (let i = 0; i < next.length; i++) {
    let position = 0; 
    prev[i].addEventListener("click", function() {
      if (position > 0) {
        position -= 1;
        translateX(position,x+"Slide"); 
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems(x)) {
        position += 1;
        translateX(position,x+"Slide");
      }
    });
  }
}

function hotelSB(x) {
  let next = document.getElementsByClassName(x+"Nextbtn");
  let prev = document.getElementsByClassName(x+"Prvbtn");
  
  for (let i = 0; i < next.length; i++) {
    let position = 0; 
    prev[i].addEventListener("click", function() {
      if (position > 0) {
        position -= 1;
        translateX(position,x+"Slide"); 
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems(x)) {
        position += 1;
        translateX(position,x+"Slide");
      }
    });
  }
}

function resturentSB(x) {
  let next = document.getElementsByClassName(x+"Nextbtn");
  let prev = document.getElementsByClassName(x+"Prvbtn");
  
  for (let i = 0; i < next.length; i++) {
    let position = 0; 
    prev[i].addEventListener("click", function() {
      if (position > 0) {
        position -= 1;
        translateX(position,x+"Slide"); 
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems(x)) {
        position += 1;
        translateX(position,x+"Slide");
      }
    });
  }
}


function hiddenItems(x) {
  let slider = document.getElementById(x+"Slider");
  let item = document.getElementById(x+"Slide");
  let items = getCount(item, false);
  let visibleItems = slider.offsetWidth / 210;
  return items - Math.ceil(visibleItems);
}

function translateX(position,parSlide) {
  let slide = document.getElementById(parSlide);
  slide.style.left = position * -350 + "px";
}

function getCount(parent, getChildrensChildren) {
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}
