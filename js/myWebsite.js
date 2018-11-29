console.log("script active");
var dots=document.getElementsByClassName("dot");
arrowElement= document.getElementsByClassName("bouncingArrow")[0];
//DOM elements and yheirbounding rectangles
projectDiv= document.getElementById("projects");
projectDivBound=projectDiv.getBoundingClientRect();
homePageDiv=document.getElementById("homePage");
homePageDivBound= homePageDiv.getBoundingClientRect();
publicationsDiv=document.getElementById("publications");
publicationsDivBound= publicationsDiv.getBoundingClientRect();
aboutMeDiv=document.getElementById("aboutMe");
aboutMeDivBound= aboutMeDiv.getBoundingClientRect();
socialDiv=document.getElementById("social");
socialDivBound= socialDiv.getBoundingClientRect();

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

window.onbeforeunload = function() {window.scrollTo(0,0);}
//called when the page loads
window.onload = function() {
  checkForActiveDiv();
};

//called when page is scrolled
window.addEventListener('scroll',function(e){
  console.log(document.documentElement.clientWidth);
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
  if (homePageDivBound.bottom >= (window.innerHeight+window.pageYOffset-threeFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-threeFifthOfViewPort)) {
      setOpacityOfDots(0)
      setAnchorBackground(0);
      console.log('In the viewport!'+' top:'+homePageDivBound.top+' bottom:'+homePageDivBound.bottom+' bottom with offset:'+(window.innerHeight+window.pageYOffset));
  }
  else if (projectDivBound.bottom >= (window.innerHeight+window.pageYOffset-threeFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-threeFifthOfViewPort))
  {
    setOpacityOfDots(1)
    setAnchorBackground(1);
    console.log('In the viewport!'+' top:'+projectDivBound.top+' bottom:'+projectDivBound.bottom+' bottom with offset:'+(window.innerHeight+window.pageYOffset));

  }
  else if (publicationsDivBound.bottom >= (window.innerHeight+window.pageYOffset-threeFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-threeFifthOfViewPort))
  {
    setOpacityOfDots(2)
    setAnchorBackground(2);
    console.log('In the viewport!'+' top:'+publicationsDivBound.top+' bottom:'+publicationsDivBound.bottom+' bottom with offset:'+(window.innerHeight+window.pageYOffset));

  }
  else if (aboutMeDivBound.bottom >= (window.innerHeight+window.pageYOffset-oneFifthOfViewPort || document.documentElement.clientHeight+window.pageYOffset-oneFifthOfViewPort))
  {
    setOpacityOfDots(3);
    setAnchorBackground(3);
    console.log('In the viewport!'+' top:'+aboutMeDivBound.top+' bottom:'+aboutMeDivBound.bottom+' bottom with offset:'+(window.innerHeight+window.pageYOffset));

  }
  else {
    setOpacityOfDots(4)
    setAnchorBackground(4);
    console.log('iiiiIn the viewport!'+' top:'+homePageDivBound.top+' bottom:'+homePageDivBound.bottom+' bottom with offset:'+(window.innerHeight+window.pageYOffset));

    console.log('social bottom:'+socialDivBound.bottom+' bottom with offset:'+(window.innerHeight+window.pageYOffset));
    	//console.log('Not in the viewport... whomp whomp'+' top:'+homePageDivBound.top+' bottom:'+homePageDivBound.bottom+' bottom with offset:'+(window.innerHeight+window.pageYOffset));
  }


}

//sets the background of anchor tag whose associated div is visible in the viewport
function setAnchorBackground(a){
  for(var i=0;i<=4;i++)
  {
    if(i==a) topNavAnchors[i].style.color="#fafafa";
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
*/
