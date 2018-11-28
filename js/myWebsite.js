console.log("script active");
var prevScrollPosition= window.pageYOffset;
arrowElement= document.getElementsByClassName("bouncingArrow")[0];
console.log(arrowElement.scrollTop);

function scrollCheckForBouncingArrow(){
  console.log("function called"+arrowElement.scrollTop);

}

function offset(el) {
  var rect = el.getBoundingClientRect();
  return ("bottom: "+ Math.round(rect.bottom)+" "+document.documentElement.scrollTop)
}

window.addEventListener('scroll',function(e){
  console.log("function called1111 :"+ offset(arrowElement));
  if(document.documentElement.scrollTop>150){
    arrowElement.style.display="none";
  }
  else if(document.documentElement.scrollTop<150){
    arrowElement.style.display="block";
  }
});

/*
/* How to get relative position of an element to a div*/
/*
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return ("top: "+Math.round(rect.top + scrollTop) +" left: "+ Math.round(rect.left + scrollLeft))

}
*/
