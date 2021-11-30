class WindowApp {

    constructor(name){

        let window = document.createElement('div');
        window.setAttribute('class','window');
        window.setAttribute('id','window'+idxWindow);
        window.innerHTML =
        `
        <div class="window-bar" id="window${idxWindow}-drag">
            <img class="window-bar-icon" src="assets/logo-${name}.png">
            <div class="window-bar-name">${name}</div>
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
        if(name == "VSCODE") return `<iframe width="100%" height="100%" src="https://vscode.dev/"></iframe>`;

        return '';
    }
}