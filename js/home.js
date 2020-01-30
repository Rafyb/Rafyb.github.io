homeRender = function(){
    document.body.style.background = "#f8f8f8 url(assets/home_background.png) center -80px no-repeat"; 
    document.querySelector('#mainContent').innerHTML = `
        <section id="home_intro">
            <h1>Pour commencer</h1>

            <p>Etenim si attendere diligenter, existimare vere de omni hac causa volueritis, sic constituetis,
            iudices, nec descensurum quemquam ad hanc accusationem fuisse, cui, utrum vellet, liceret, nec, cum descendisset,
            quicquam habiturum spei fuisse, nisi alicuius intolerabili libidine et nimis acerbo odio niteretur. Sed ego Atratino,
            humanissimo atque optimo adulescenti meo necessario, ignosco, qui habet excusationem vel pietatis vel necessitatis
            vel aetatis. Si voluit accusare, pietati tribuo, si iussus est, necessitati, si speravit aliquid, pueritiae. Ceteris non
            modo nihil ignoscendum, sed etiam acriter est resistendum.</p>

            <p>Etenim si attendere diligenter, existimare vere de omni hac causa volueritis, sic constituetis,
                iudices, nec descensurum quemquam ad hanc accusationem fuisse, cui, utrum vellet, liceret, nec, cum descendisset,
                quicquam habiturum spei fuisse, nisi alicuius intolerabili libidine et nimis acerbo odio niteretur. Sed ego Atratino,
                humanissimo atque optimo adulescenti meo necessario, ignosco, qui habet excusationem vel pietatis vel necessitatis
                vel aetatis. Si voluit accusare, pietati tribuo, si iussus est, necessitati, si speravit aliquid, pueritiae. Ceteris non
                modo nihil ignoscendum, sed etiam acriter est resistendum.</p>
        </section>

        <section id="home_timeline">
            <h1>Formations</h1>

            <div class="timeline">
                <ul>
                <li><span></span>
                    <div>
                    <div class="title">Licence 3 - Sciences du Numérique </div>
                    <div class="info">Fomarmation sur 1 an, Niveau BAC+3</div>
                    <div class="type">Presentation</div>
                    <div class="img"><img src="assets/fges_min.png" ></div>
                    </div> <span class="number"><span>2020</span> <span>2019</span></span>
                </li>
                <li>
                    <div><span></span>
                    <div class="title">DUT Informatique</div>
                    <div class="info">Formation sur 2 ans, Niveau BAC+2</div>
                    <div class="type">Presentation</div>
                    <div class="img"><img src="assets/univ-lille_min.png" ></div>
                    </div> <span class="number"><span>2019</span> <span>2017</span></span>
                </li>
                <li>
                    <div><span></span>
                    <div class="title">Bac STI2D - options SIN</div>
                    <div class="info">Bac Sciences et Technologies de l'Industrie et du Développement Durable <br>Système de l'Information et du Numérique</div>
                    <div class="type">Review</div>
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