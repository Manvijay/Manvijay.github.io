console.log("script active");
arrowElement= document.getElementsByClassName("bouncingArrow")[0];
projectDiv= document.getElementById("projects");

window.addEventListener('scroll',function(e){
  console.log("inside scroll event listener");
  if(document.documentElement.scrollTop>150){
    arrowElement.style.display="none";
  }
  else if(document.documentElement.scrollTop<150){
    arrowElement.style.display="block";
  }
});

function scrollToProjects(){
  console.log("inside scrollToProjects");
  projectDiv.scrollIntoView();
}

/*
  $('html,body').animate({ scrollTop: $("#projects").offset().top}, 'slow');
/* How to get relative position of an element to a div*/
/*
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return ("top: "+Math.round(rect.top + scrollTop) +" left: "+ Math.round(rect.left + scrollLeft))

}
*/
