homeRender();

document.querySelector(".home").onclick = function(){  
    document.querySelector(".home").id ='activeA';
    document.querySelector(".experience").id ='';
    document.querySelector(".portfolio").id ='';
    homeRender();
} ;

document.querySelector(".experience").onclick = function(){
    document.querySelector(".home").id ='';
    document.querySelector(".experience").id ='activeE';
    document.querySelector(".portfolio").id ='';
    experiencesRender();

} ;

document.querySelector(".portfolio").onclick = function(){
    document.querySelector(".home").id ='';
    document.querySelector(".experience").id ='';
    document.querySelector(".portfolio").id ='activeR';
    realisationsRender();

} ;