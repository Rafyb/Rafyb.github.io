experiencesRender = function(){
    document.body.style.background = "#f8f8f8 url(assets/Berdeghem_V6.png) center -80px no-repeat"; 
    // (Groupe pour l’Innovation, la Valorisation et la Réflexion sur les Enseignements)
    document.querySelector('#mainContent').innerHTML = `
        <section id="home_intro">
            <h1>Le Givre</h1>

            <p>J’ai eu l'occasion de travailler au sein du groupe GIVRE ( Groupe pour l’Innovation, la Valorisation et la Réflexion sur les Enseignements ) 
            à plusieurs reprises. Le groupe GIVRE est installé à la Faculté de Pharmacie qui fait partie de l’Université de Lille. Elle compte environ 
            2 900 étudiants en formation initiale ou continue, 140 enseignantschercheurs, une centaine de personnels techniques et administratifs et 
            14 équipes de recherche dont 8 labellisées INSERM et CNRS. Ce groupe est composé d’enseignants-chercheurs, d’une ingénieure TICE, ainsi que 
            d’un pharmacien d'officine associé à la faculté. </p>

            <a href="http://pharmacie.univ-lille.fr/innovations-pedagogiques/le-groupe-givre.html"><img src="assets/givre.png" style=" margin-left: auto; margin-right: auto; display:block" ></a>
            
            <p>Leur objectif est d’exploiter au mieux les supports numériques pour aider les étudiants dans leurs apprentissages à l’aide de supports 
            de travail adaptatif (Learning Adaptive) et d’outil d’analyse des apprentissages (Learning Analytics).</p>

        </section>

        <section id="home_timeline">
            <h1>Travail réalisé</h1>

            <div class="timeline">
                <ul>
                <li><span></span>
                    <div>
                    <div class="title">Développement d'un système de Jeu en 2D isométrique</div>
                    <div class="info">Vacataire 6 mois </div>
                    <div><a href="/"><span class="label javascript">JavaScript</span></a> <a href="http://phaser.io/"><span class="label phaser">Phaser 3</span></a> </div>
                    <div class="type">Présentation<br>
                    
                    <img src="assets/ecaducee.jpg" style="width :50%; margin:auto; display:block" >
                    
                    </div>
                    <div class="img"><img src="assets/city_icone.png" ></div>
                    </div> <span class="number"><span>Jui<br>2020</span> <span>Déc 2019</span></span>
                </li>
                <li>
                    <div><span></span>
                    <div class="title">Développement d'un mode multijoueurs en ligne</div>
                    <div class="info">CDD 1 mois </div>
                    <div> <a href="/"><span class="label javascript">JavaScript</span></a> <a href="http://phaser.io/"><span class="label phaser">Phaser 2</span></a> </div>
                    <div class="type">Présentation<br>
                    
                    <img src="assets/creation.png" style="width :28%; margin:2%;   display:inline-block" >
                    <img src="assets/rejoindre.png" style="width :28%; margin:2%;  display:inline-block" >
                    <img src="assets/partie.png" style="width :28%; margin:2%;  display:inline-block" >
                    
                    </div>
                    <div class="img"><img src="assets/multijoueurs_icone.png" ></div>
                    </div> <span class="number"><span>Aout 2019</span><span>Jui<br>2019</span></span>
                </li>
                <li>
                    <div><span></span>
                    <div class="title">Intégration de graphiques interactifs et responsives de<br> visualisation de données sur Moodle </div>
                    <div class="info">Stage 3 mois </div>
                    <div><a href="/"><span class="label javascript">JavaScript</span></a> <a href="/"><span class="label webservice">WebService</span></a> <a href="https://www.chartjs.org/"><span class="label chartjs">ChartJS</span> </a> </div>
                    <div class="type">Durant mon stage à la Faculté de Pharmacie, j’ai dû mettre en place des représentations graphiques de 
                    diverses informations extraites de la plateforme pédagogique Moodle. Ces graphiques venant s’appliquer dans une application
                    sur mobile développée par le groupe GIVRE.<br><br>
                    Pour cela j'ai appri à utiliser l'API ChartJS ainsi que l'utilisation des WebServices de l'API Moodle. Durant ce stage j'ai été amenné
                    à rechercher des solutions techniques et à apporter mes idées sur les données pouvant être utile aussi bien pour un enseignant que
                    pour un étudiant. Ce fut aussi ma première occasion d'utiliser l'élément Canvas d'HTML 5 et de comprendre son fonctionnement.
                    Ce stage fut une bonne première expérience en entreprise pour moi, il m’a permis d’améliorer mes compétences en informatique et d’acquérir 
                    les méthodes de travail en entreprise. <br>

                    <img src="assets/bar.jpg" style="width :39%; margin:5%; display:inline-block" >
                    <img src="assets/radar.jpg" style="width :39%; margin:5%; display:inline-block" >
                    </div>
                    <div class="img"><img src="assets/chartjs-logo.png" ></div>
                    </div> <span class="number"><span>Jui<br>2019</span> <span>Avril 2019</span></span>
                </li>
                </ul>
            </div>

        </section>`;
}