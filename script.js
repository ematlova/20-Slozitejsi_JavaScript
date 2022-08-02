console.log("JavaScript funguje!");

let visualniHlavniOdstavec = document.querySelector(".hlavni-odstavec");
visualniHlavniOdstavec.textContent = "Domovská stránka"; 

let visualniMojeFoto = document.querySelector(".moje-foto"); 
visualniMojeFoto.src = "img/druhe-foto.jpeg";

let visualniPredstaveniSe = document.querySelector(".predstaveni-se");
visualniPredstaveniSe.style.color = "darkblue";

let visualniVzdelani = document.querySelector(".vzdelani");
visualniVzdelani.textContent = "Školy";

function pridejZvyrazneni(){
    let visualniTlacitko1 = document.querySelector(".tlacitko1");
    visualniTlacitko1.classList.add ("zvyrazneny");
}