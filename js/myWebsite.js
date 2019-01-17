var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log("script active: "+w+"  "+h);
var dots=document.getElementsByClassName("dot");
var arrowElement= document.getElementsByClassName("bouncingArrow")[0];
var titleContainerHrProj= document.getElementById("titleProjects").getElementsByTagName("hr")[0];
var titleContainerHrPub= document.getElementById("titlePublications").getElementsByTagName("hr")[0];

//DOM elements
var projectDiv,projectDivBound,projectDivBottom,titleContainerHrProj,homePageDiv,homePageDivBound,homePageDivBottom,publicationsDiv,
publicationsDivBound,publicationsDivBottom,titleContainerHrPub,aboutMeDiv,aboutMeDivBound,aboutMeDivBottom,socialDiv,socialDivBound,
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
  //window.scrollTo(0,0);
  //console.log("offset on load: "+window.pageYOffset);

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
      setOpacityOfDots(0);
      setAnchorColor(0);
      setTitleUnderline(0);
      document.title="Manvijay | Home";
  }
  else if (projectDivBottom>= (window.innerHeight+window.pageYOffset-threeFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-threeFifthOfViewPort))
  {
    setOpacityOfDots(1);
    setAnchorColor(1);
    setTitleUnderline(1);
    document.title="Manvijay | Projects";
  }
  else if (publicationsDivBottom >= (window.innerHeight+window.pageYOffset-threeFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-threeFifthOfViewPort))
  {
    setOpacityOfDots(2);
    setAnchorColor(2);
    setTitleUnderline(2);
    document.title="Manvijay | Publications";
  }
  else if (aboutMeDivBottom >= (window.innerHeight+window.pageYOffset-oneFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-oneFifthOfViewPort))
  {
    setOpacityOfDots(3);
    setAnchorColor(3);
    setTitleUnderline(3);
    document.title="Manvijay | Glory Glory Manchester United";
  }
  else {
    setOpacityOfDots(4);
    setAnchorColor(4);
    setTitleUnderline(4);
    document.title="Manvijay | Shoot an e-mail!";
  }
}


function setTitleUnderline(index){

  if(index==1){
    titleContainerHrProj.style.width="50%";
    titleContainerHrPub.style.width="5px";
  }
  else if(index==2){
    titleContainerHrPub.style.width="50%";
    titleContainerHrProj.style.width="5px";
  }
  else {
    titleContainerHrProj.style.width="5px";
    titleContainerHrPub.style.width="5px";
  }
}

//sets the background of anchor tag whose associated div is visible in the viewport
function setAnchorColor(a){
  for(var i=0;i<=4;i++)
  {
    if(i==a) {
      topNavAnchors[i].style.color="#fafafa";
      topNavAnchors[i].style.borderTop="1px white solid";
    }
    else{
      topNavAnchors[i].style.color="grey";
      topNavAnchors[i].style.borderTop="none";
    }

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
  //console.log("inside scrollToProjects");
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
