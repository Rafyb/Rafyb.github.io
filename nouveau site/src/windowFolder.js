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
            <a class="window-bar-close" id="${idxWindow}" onclick="return close();">&#10006;</a>
        </div>
        <div class="window-content"></div>
        `;

        idxWindow++;

        document.querySelector('#windows').appendChild(window);

        dragElement(window);

        this.window = window;
    }

    show()
    {
        this.window.style.visibility = "visible";
        this.window.style.width = '70%';
        this.window.style.height = '70%';
    }
}