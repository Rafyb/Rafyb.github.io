realisationsRender = function(){
    document.querySelector(".home").id ='';
    document.querySelector(".experience").id ='';
    document.querySelector(".portfolio").id ='activeR';
    document.querySelector("#mydivheader").style.backgroundColor = "#c76912" ;
    document.body.style.background = "#f8f8f8 url(assets/realisations.png) center -80px no-repeat"; 
    document.querySelector('#mainContent').innerHTML = `
        <section id="home_intro">
            <h1>Mes Réalisations</h1>

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
        
        <section id="home_portfolio" class="portfolio_choose">
			
			<a href="realisations.html" class="portfolioType portfolio_student">
			<span class="portfolioIcon"></span>
			<span class="title">Accès à toutes les réalisations</span>
			<span class="desc">(Redirection vers la pages des réalisations)</span>
            </a>
            
            <a href="/" class="portfolioType portfolio_professional">
			<span class="portfolioIcon"></span>
			<span class="title">Réalisations profesionnels</span>
			<span class="desc"> Réalisations suite à mes expériences en etreprise </span>
            </a>
            
        <div class="clearer"></div>
        
</section>`;
}