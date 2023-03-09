let elt = document.getElementById('test1');
elt.innerHTML = "<ul><li>Element 1</li><li>Element 2</li><li>Element 3</li></ul>";

//document.getElementsByClassName()
//document.getElementsByTagName()

//Ajout d'un élement. 
const newElt = document.createElement("div");

elt.appendChild(newElt);

// Supprimer et remplacer des élements.
// elt.removeChild(newElt); // Supprime l'élément newElt de l'élément elt.
elt.replaceChild(document.createElement("article"), newElt); // Remplace l'éléement newElt par un nouvel élement de type article

