homeRender();
  
document.querySelector(".home").onclick = function(event){  
        event.preventDefault();
        homeRender();
} ;
  
document.querySelector(".experience").onclick = experienceLaunch;
  
document.querySelector(".portfolio").onclick = function(event){
        event.preventDefault();
        realisationsRender();
  
      document.querySelector(".portfolio_professional").onclick = experienceLaunch;
  
};
  
document.getElementById("mydiv").style.display ="none";
  
document.querySelector('.youtube').onclick = function(){
        document.getElementById("mydiv").style.display ="block";
};
  
dragElement(document.getElementById("mydiv"));
  
function experienceLaunch(event){
      event.preventDefault();
      experiencesRender();
}
    
function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onpointerdown = dragpointerDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onpointerdown = dragpointerDown;
      }
  
      function dragpointerDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the pointer cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointerup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onpointermove = elementDrag;
      }
  
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
  
      function closeDragElement() {
        // stop moving when pointer button is released:
        document.onpointerup = null;
        document.onpointermove = null;
      }
}


window.onload =  function(){
  if( window.devicePixelRatio > 2){
  
    document.querySelector('#mainBody').innerHTML = `
      <h1> Cette page n'est pas encore disponible sur smartphone </h1>
      <img src="assets/workingOn.gif" style=" margin-left: auto; margin-right: auto; display:block" >
    `;
    document.querySelector('footer').style.display ='none';
    document.querySelector('.icon-bar').style.display ='none';
    document.body.style.background ='';
  }
};
