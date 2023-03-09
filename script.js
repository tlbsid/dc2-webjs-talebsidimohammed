let elt = document.getElementById('test1');
elt.innerHTML = "<div >Je suis la div 1</div> <div>Je suis la div 2</div> <div>Je suis la div 3</div>";

//Ajout d'un élement. 
var newElm = document.createElement('div');
newElm.innerHTML = "<div>Je suis la div 4</div ><div>Je suis la div 5</div> <div>Je suis la div 6</div>"
elt.appendChild(newElm);
//document.getElementsByClassName()
//document.getElementsByTagName()

// Supprimer et remplacer des élements.
// elt.removeChild(newElt); // Supprime l'élément newElt de l'élément elt.
newElm.innerHTML = "<span>Je suis la span 1</span> <span>Je suis la span 1</span> <span>Je suis la span 1</span>"
elt.replaceChild(document.createElement("section"), newElm); // Remplace l'éléement newElt par un nouvel élement de type article

// Evenement.
/* elt.addEventListener('click', function(){
    elt.innerHTML ="C'est Cliqué !";
}); */

const div1 = elt.getElementsByTagName("div")[0];
const div3 = elt.getElementsByTagName("div")[2];

// Fonction de changement de couleur de la première div
function changerCouleur() {
  div1.style.color = "red";
}

// Ajout d'un écouteur d'événement sur la troisième div
div3.addEventListener("click", changerCouleur);
