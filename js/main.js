loadPage = function(){

  if(screen.width < 816){

    document.querySelector('#mainBody').innerHTML = `
      <h1> Cette page n'est pas encore disponible sur smartphone </h1>
      <img src="assets/workingOn.gif" style=" margin-left: auto; margin-right: auto; display:block" >
    `;
    document.querySelector('footer').style.display ='none';
    document.querySelector('.icon-bar').style.display ='none';
    document.body.style.background ='';
  
  } else {
    //screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
    //screen.lockOrientationUniversal("landscape-primary");
    document.querySelector('#mainBody').innerHTML = `
    <header>
    <div id="logo">
      <a href="/">Raphael Bauvin</a>
      <span>Web Apps & Games Developer</span>
    </div>
    <nav>
      <ul>
                  <li class="home" id="activeA" ><a href="/">Accueil</a></li>
                  <li class="experience " ><a href="/">Mon Expérience</a></li>
        <li class="portfolio " ><a href="/">Mes Réalisations</a></li>
        
      </ul>
      <div class="clearer"></div>
    </nav>
    <div class="clearer"></div>
      </header>

      <div id="mydiv">
          <div id="mydivheader">webcat.png</div>
          <img src="assets/webcat.jpg" width="200" height="150">
      </div>
    <div id="mainContent"></div>`;

    homeRender();

    document.querySelector('footer').style.display ='';
    document.querySelector('.icon-bar').style.display ='';
  
    document.querySelector(".home").onclick = function(event){  
        event.preventDefault();
        document.querySelector(".home").id ='activeA';
        document.querySelector(".experience").id ='';
        document.querySelector(".portfolio").id ='';
        document.querySelector("#mydivheader").style.backgroundColor = "#0768a0" ;
        homeRender();
    } ;
  
    document.querySelector(".experience").onclick = experienceLaunch;
  
    document.querySelector(".portfolio").onclick = function(event){
        console.log(event);
        event.preventDefault();
        document.querySelector(".home").id ='';
        document.querySelector(".experience").id ='';
        document.querySelector(".portfolio").id ='activeR';
        document.querySelector("#mydivheader").style.backgroundColor = "#c76912" ;
        realisationsRender();
  
      document.querySelector(".portfolio_professional").onclick = experienceLaunch;
  
    } ;
  
    document.getElementById("mydiv").style.display ="none";
  
    document.querySelector('.youtube').onclick = function(){
        document.getElementById("mydiv").style.display ="block";
    };
  
    dragElement(document.getElementById("mydiv"));
  
    function experienceLaunch(event){
      event.preventDefault();
      document.querySelector(".home").id ='';
      document.querySelector(".experience").id ='activeE';
      document.querySelector(".portfolio").id ='';
      document.querySelector("#mydivheader").style.backgroundColor = "#04912e" ;
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
  }

}

loadPage();
window.onresize = loadPage;


