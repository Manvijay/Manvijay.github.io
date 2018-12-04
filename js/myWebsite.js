var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log("script active: "+w+"  "+h);
var dots=document.getElementsByClassName("dot");
arrowElement= document.getElementsByClassName("bouncingArrow")[0];

//DOM elements
var projectDiv,projectDivBound,projectDivBottom,homePageDiv,homePageDivBound,homePageDivBottom,publicationsDiv,
publicationsDivBound,publicationsDivBottom,aboutMeDiv,aboutMeDivBound,aboutMeDivBottom,socialDiv,socialDivBound,
socialDivBottom;

//references to the anchor tags on top navigation bar
homeAnchor=document.getElementsByClassName("homeAnchor")[0];
aboutMeAnchor=document.getElementsByClassName("aboutMeAnchor")[0];
projectsAnchor=document.getElementsByClassName("projectsAnchor")[0];
publicationsAnchor=document.getElementsByClassName("publicationsAnchor")[0];
socialAnchor=document.getElementsByClassName("socialAnchor")[0];
topNavAnchors=document.getElementsByClassName("nav-link");
//multiples of height of viewports
threeFifthOfViewPort= 0.6*window.innerHeight || 0.6*document.documentElement.clientHeight; //60% of viewport height
oneFifthOfViewPort= 0.2*window.innerHeight || 0.2*document.documentElement.clientHeight; //20% of viewport height

window.onbeforeunload = function(){}// {window.scrollTo(0,0);}
//called when the page loads
window.onload = function() {
  window.scrollTo(0,0);
  console.log("offset on load: "+window.pageYOffset);

  //DOM elements and their bounding rectangles
  projectDiv= document.getElementById("projects");
  projectDivBound=projectDiv.getBoundingClientRect();
  projectDivBottom=projectDivBound.bottom;
  homePageDiv=document.getElementById("homePage");
  homePageDivBound= homePageDiv.getBoundingClientRect();
  homePageDivBottom=homePageDivBound.bottom;
  publicationsDiv=document.getElementById("publications");
  publicationsDivBound= publicationsDiv.getBoundingClientRect();
  publicationsDivBottom= publicationsDivBound.bottom;
  aboutMeDiv=document.getElementById("aboutMe");
  aboutMeDivBound= aboutMeDiv.getBoundingClientRect();
  aboutMeDivBottom=aboutMeDivBound.bottom;
  socialDiv=document.getElementById("social");
  socialDivBound= socialDiv.getBoundingClientRect();
  socialDivBottom= socialDivBound.bottom;

  checkForActiveDiv();
};

//called when page is scrolled
window.addEventListener('scroll',function(e){
  if(document.documentElement.scrollTop>150){
    arrowElement.style.display="none";
  }
  else if(document.documentElement.scrollTop<150){
    arrowElement.style.display="block";
  }

  checkForActiveDiv();
});

//check for active page in the viewport
function checkForActiveDiv(){
  if (homePageDivBottom >= (window.innerHeight+window.pageYOffset-threeFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-threeFifthOfViewPort)) {
      setOpacityOfDots(0)
      setAnchorBackground(0);

  }
  else if (projectDivBottom>= (window.innerHeight+window.pageYOffset-threeFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-threeFifthOfViewPort))
  {
    setOpacityOfDots(1)
    setAnchorBackground(1);

  }
  else if (publicationsDivBottom >= (window.innerHeight+window.pageYOffset-threeFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-threeFifthOfViewPort))
  {
    setOpacityOfDots(2)
    setAnchorBackground(2);

  }
  else if (aboutMeDivBottom >= (window.innerHeight+window.pageYOffset-oneFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-oneFifthOfViewPort))
  {
    setOpacityOfDots(3);
    setAnchorBackground(3);

  }
  else {
    setOpacityOfDots(4)
    setAnchorBackground(4);

  }
}

//sets the background of anchor tag whose associated div is visible in the viewport
function setAnchorBackground(a){
  for(var i=0;i<=4;i++)
  {
    if(i==a) {
      topNavAnchors[i].style.color="#fafafa";
    }
    else topNavAnchors[i].style.color="grey";
  }
}

//sets the opacity of active dot to 1
function setOpacityOfDots(a){
  for(var i=0;i<=4;i++)
  {
    if(i==a) dots[i].style.opacity=1;
    else dots[i].style.opacity=0.3;
  }
}

function scrollToProjects(){
  console.log("inside scrollToProjects");
  //window.scrollTo(680,680);
  projectDiv.scrollIntoView();
}


/*
  $('html,body').animate({ scrollTop: $("#projects").offset().top}, 'slow');
/* How to get relative position of an element to a div*/

/*
function offset(el) {
    var rect = el.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return ("top: "+Math.round(rect.top + scrollTop) +" left: "+ Math.round(rect.left + scrollLeft))
}

//for logging all the elements whose width is more than screen width
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
*/
