function afficherContenu(nom) {
    
    document.getElementById("contenu").classList.remove("invisible");
    document.getElementById("form_code").classList.add("invisible");
        
    var pElt = document.createElement("p");
    pElt.textContent = "Bonjour " + nom + ", vous avez reçu un Krapo. Veuillez choisir votre destination: ";
    pElt.style.textAlign = "center";
    pElt.style.color = "rgb(7,112,0)";
    pElt.style.fontSize = "1.2em";
    document.getElementById("contenu").insertBefore(pElt,document.getElementById("form_destination"));
}




var pElt = document.createElement("p");
pElt.textContent = "";
document.getElementById("form_code").appendChild(pElt);


document.getElementById("form_code").addEventListener("submit", function(e) {
    
    e.preventDefault();
    
    var code = document.getElementById("numero").value; 
    
    if (code.toUpperCase() === "28081990J") {
        
       afficherContenu("Jonathan"); 
        
    } else if (code.toUpperCase() === "12091995S") {
        
        afficherContenu("Sophie");
    } else {
        
       pElt.textContent="Votre code cadeau n'est pas valide. Veuillez réessayer.";
        
    }
});


document.getElementById("form_destination").addEventListener("submit", function(e) {
    
    e.preventDefault();
    
    var valeur = document.querySelector('input[name="destination"]:checked').value;
    
    if (valeur === "Ferney-Voltaire") {
        
        document.getElementById("contenu").classList.add("invisible");
        pElt.textContent = "";
        document.getElementById("message").textContent = "Félicitations, votre voyage a été réservé. Veuillez prendre contact avec vos hôtes pour les détails pratiques. Encore bon anniversaire !"
        
    } else {
        
        document.getElementById("message").textContent = "Nous sommes désolés, vu sa grande popularité, la destination que vous avez sélectionnée n'est plus disponible. Veuillez faire un autre choix."
    }
    
    window.scroll(0,10000);
    
})


Array.prototype.slice.call(document.querySelectorAll('input[name="destination"]')).map(function(el) {
    el.addEventListener("change", function(e) {
    
    if (e.target.checked) {
    var valeur = e.target.value;
    console.log(valeur);
    document.getElementById("choix").textContent = valeur;
    } else {
        
       document.getElementById("message").textContent = "Veuillez choisir une destination." 
    }
    
})
})




