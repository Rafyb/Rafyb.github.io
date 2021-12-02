class WindowFolder {

    constructor(name){

        let window = document.createElement('div');
        window.setAttribute('class','window');
        window.setAttribute('id','window'+idxWindow);
        window.innerHTML =
        `

        <div class="window-bar" id="window${idxWindow}-drag">
            <img class="window-bar-icon" src="assets/folder.png">
            <div class="window-bar-name">${name}</div>
            <a class="window-bar-resize" id="${idxWindow}" onclick="return resize();">&#9712;</a>
            <a class="window-bar-close" id="${idxWindow}" onclick="return close();">&#10006;</a>
        </div>
        <div class="window-content">${this.loadHTML(name)}</div>
        `;

        idxWindow++;

        document.querySelector('#windows').appendChild(window);

        dragElement(window);

        this.window = window;
    }

    show()
    {
        this.window.style.visibility = "visible";
        this.window.classList.add("opened");
    }

    loadHTML(name)
    {
        if(name == "Games") return `
            <div id="games-header">
                <img src="assets/itchio-logo.png">
            </div>
            <div id="projects">
                
                <div class="frame"><iframe src="https://itch.io/embed/892260?bg_color=0f0200&amp;fg_color=ffffff&amp;link_color=f7d88d&amp;border_color=82332d" width="552" height="167" frameborder="0"><a href="https://audrey-deman.itch.io/pluton-quest">Pluton Quest by Audrey Deman, Poulpie, LeaLnn, chergui thibaut, Raphael Bauvin</a></iframe> </div>
                <div class="frame"><iframe src="https://itch.io/embed/1008816?dark=true" width="552" height="167" frameborder="0"><a href="https://poulpie.itch.io/ori-to-helpkill-you-my-friend">Ori to Help/Kill You My Friend by Poulpie</a></iframe> </div>
                <div class="frame"><iframe src="https://itch.io/embed/903281?dark=true" width="552" height="167" frameborder="0"><a href="https://rafyb.itch.io/my-lost-peer">My Lost Peer by Raphael Bauvin, Audrey Deman, FlorianAsencio, Zahndrekh, Poulpie</a></iframe> </div>
                <div class="frame"><iframe src="https://itch.io/embed/808844?dark=true" width="552" height="167" frameborder="0"><a href="https://rafyb.itch.io/remote-golf">Remote Golf by Raphael Bauvin, LeaLnn, Pierre Morreel</a></iframe> </div>
                <div class="frame"><iframe src="https://itch.io/embed/780072?bg_color=222222&amp;fg_color=eeeeee&amp;border_color=363636" width="552" height="167" frameborder="0"><a href="https://magons.itch.io/billys-nightmare">Billy's Nightmare by Magons, Raphael Bauvin, Louis REMY, Pierre CILLUFFO</a></iframe>  </div>
            </div>`;

        return '';
    }
}