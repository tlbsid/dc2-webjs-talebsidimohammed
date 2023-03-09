let elt = document.getElementById('test1');
elt.innerHTML = "<div>tytytry</div>";

//document.getElementsByClassName()
//document.getElementsByTagName()

const newElt = document.createElement("div");
let elt = document.getElementById("main");

elt.appendChild(newElt);

const elt = document.getElementById('mon-lien');
elt.addEventListener('click', fucntion() {
    elt.innerHTML"C'est cliqué";
});