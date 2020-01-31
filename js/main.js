if(screen.width < 816){
  document.querySelector('#mainBody').innerHTML = `
    <h1> Cette page n'est pas encore disponible sur smartphone </h1>
    <img src="assets/workingOn.gif" style=" margin-left: auto; margin-right: auto;" >
  `;
  document.querySelector('footer').innerHTML ='';
  document.querySelector('.icon-bar').innerHTML ='';

} else {

  homeRender();

  document.querySelector(".home").onclick = function(event){  
      event.preventDefault();
      document.querySelector(".home").id ='activeA';
      document.querySelector(".experience").id ='';
      document.querySelector(".portfolio").id ='';
      document.querySelector("#mydivheader").style.backgroundColor = "#0768a0" ;
      homeRender();
  } ;

  document.querySelector(".experience").onclick = function(event){
      event.preventDefault();
      document.querySelector(".home").id ='';
      document.querySelector(".experience").id ='activeE';
      document.querySelector(".portfolio").id ='';
      document.querySelector("#mydivheader").style.backgroundColor = "#04912e" ;
      experiencesRender();

  } ;

  document.querySelector(".portfolio").onclick = function(event){
      console.log(event);
      event.preventDefault();
      document.querySelector(".home").id ='';
      document.querySelector(".experience").id ='';
      document.querySelector(".portfolio").id ='activeR';
      document.querySelector("#mydivheader").style.backgroundColor = "#c76912" ;
      realisationsRender();

  } ;

  document.getElementById("mydiv").style.display ="none";

  document.querySelector('.youtube').onclick = function(){
      document.getElementById("mydiv").style.display ="block";
  };

  dragElement(document.getElementById("mydiv"));

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
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
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}