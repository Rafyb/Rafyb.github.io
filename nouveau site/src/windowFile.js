class WindowFile {

    constructor(name){

        let window = document.createElement('div');
        window.setAttribute('class','window');
        window.setAttribute('id','window'+idxWindow);
        window.innerHTML =
        `
        <div class="window-bar" id="window${idxWindow}-drag">
            <img class="window-bar-icon" src="assets/document.png">
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
        if(name == "Experiences") return `
            <h1 id="exp-title">Mon Expérience</h1>
            <div class="block">
            <h2>Le GIVRE</h2>
            <p>J’ai eu l'occasion à plusieurs reprises de travailler au sein du groupe GIVRE ( Groupe pour l’Innovation, la Valorisation et la Réflexion sur les Enseignements ). Le groupe GIVRE est installé à la Faculté de Pharmacie qui fait partie de l’Université de Lille. Elle compte environ 2 900 étudiants en formation initiale ou continue, 140 enseignants chercheurs, une centaine de personnels techniques et administratifs et 14 équipes de recherche dont 8 labellisées INSERM et CNRS. Ce groupe est composé d’enseignants-chercheurs, d’une ingénieure TICE, ainsi que d’un pharmacien d'officine associé à la faculté. </p>
            <a href="https://pharmacie.univ-lille.fr/innovations-pedagogiques/le-groupe-givre" target="_blank"><img src="assets/givre.png" style=" margin-left: auto; margin-right: auto; display:block; width:70%;" ></a>
            <p>Leur objectif est d’exploiter au mieux les supports numériques pour aider les étudiants dans leurs apprentissages à l’aide de supports 
            de travail adaptatif (Learning Adaptive) et d’outils d’analyse des apprentissages (Learning Analytics).</p>
            <br/>
            <br/>
            ${loadTimeline('timelineExp')}
            </div>
            `;
        if(name == "Formations") return `
            <h1 id="student-title">Mes études</h1>
            <div class="block">
            <br/>
            <br/>
            ${loadTimeline('timelineEtude')}
            </div>
            `;
        if(name == "About me") return `
            
            <div class="block">
            Raphael Bauvin
            Game & Web Developer
            </div>
            `;
        return '';
    }
}