homeRender = function(){
    document.body.style.background = "#f8f8f8 url(assets/home_background.png) center -80px no-repeat"; 
    document.querySelector('#mainContent').innerHTML = `
        <section id="home_intro">
            <h1>Pour commencer</h1>

            <p>Je m’appelle Raphael Bauvin, j’ai 20 ans et je suis actuellement étudiant à L’université catholique de Lille en Licence 3 Sciences 
            du numérique. Je suis passioné par le milieu de l’informatique et du visuel, plus précisément dans le Développement de Jeux video.</p>

            <p>Mes passe-temps sont le vélo, la photographie et le dessin. Je dessine sur tablette graphique et j’invente des scénarios, personnages 
            et méchanismes de jeux video. Ce qui m’enthousiasme le plus dans le développement, c’est de pouvoir concevoir quelque chose de concret que 
            je puisse expérimenter et améliorer. J’aimerai créer des jeux qui fassent ressentir des émotions par leurs univers, l’ambiance de leurs décors. 
            Mais aussi des jeux avec des gameplays innovants ou qui aident à l'apprentissage. </p>
        </section>

        <section id="home_timeline">
            <h1>Formations</h1>

            <div class="timeline">
                <ul>
                <li><span></span>
                    <div>
                    <div class="title">Licence 3 - Sciences du Numérique </div>
                    <div class="info">Formation sur 1 an, Niveau BAC+3</div>
                    <div class="utils"><a href="https://www.fges.fr/cursus-universitaire/licence-sts/informatique-et-sciences-du-numerique/">Contenu de la formation</a></div>
                    <div class="type">Presentation</div>
                    <div class="img"><a href="https://www.fges.fr/"><img src="assets/fges_min.png" ></a></div>
                    </div> <span class="number"><span>2020</span> <span>2019</span></span>
                </li>
                <li>
                    <div><span></span>
                    <div class="title">DUT Informatique</div>
                    <div class="info">Formation sur 2 ans, Niveau BAC+2</div>
                    <div class="utils"><a href="http://www.iut-a.univ-lille.fr/dut-info/">Contenu de la formation</a></div>
                    <div class="type">Presentation</div>
                    <div class="img"><a href="https://www.iut-a.univ-lille.fr/"><img src="assets/iuta.png" ></a></div>
                    </div> <span class="number"><span>2019</span> <span>2017</span></span>
                </li>
                <li>
                    <div><span></span>
                    <div class="title">Bac STI2D - options SIN</div>
                    <div class="info">Bac Sciences et Technologies de l'Industrie et du Développement Durable <br>Système de l'Information et du Numérique</div>
                    <div class="utils"><a href="http://www.iut-a.univ-lille.fr/dut-info/">Contenu de la formation</a></div>
                    <div class="type">Présentation</div>
                    <div class="img"><a href="https://saintremi.fr/"><img src="assets/stremi.png" ></a></div>
                    </div> <span class="number"><span>2017</span> <span>2015</span></span>
                </li>
                </ul>
            </div>

        </section>

        <section id="home_autres">
            <h1>Mes Compétences</h1>

            <p>Etenim si attendere diligenter, existimare vere de omni hac causa volueritis, sic constituetis,
                iudices, nec descensurum quemquam ad hanc accusationem fuisse, cui, utrum vellet, liceret, nec, cum descendisset,
                quicquam habiturum spei fuisse, nisi alicuius intolerabili libidine et nimis acerbo odio niteretur. Sed ego Atratino,
                humanissimo atque optimo adulescenti meo necessario, ignosco, qui habet excusationem vel pietatis vel necessitatis
                vel aetatis. Si voluit accusare, pietati tribuo, si iussus est, necessitati, si speravit aliquid, pueritiae. Ceteris non
                modo nihil ignoscendum, sed etiam acriter est resistendum.</p>
        </section>`;
}