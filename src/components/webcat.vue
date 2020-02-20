<template>
  <div id="mydiv">
        <div id="mydivheader">webcat.png</div>
        <img src="@/assets/webcat.jpg" width="200" height="150">
    </div>
</template>

<script>

export default {
  name: 'webcat'
    
}

Document.dragElement = function() {
      let elmnt = document.getElementById("mydiv");
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

</script>

<style scoped>
#mydiv {
    position: absolute;
    z-index: 9;
    background-color: #f1f1f1;
    border: 1px solid #d3d3d3;
    text-align: center;
    display: none;
    top:10px;
}
  
#mydivheader {
    padding: 10px;
    cursor: move;
    z-index: 10;
    background-color: #0768a0;
    color: #fff;
}
</style>