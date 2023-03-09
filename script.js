let elt = document.getElementById('test1');
elt.innerHTML = "<ul><li>Element 1</li><li>Element 2</li><li>Element 3</li></ul>";

//document.getElementsByClassName()
//document.getElementsByTagName()

const newElt = document.createElement("div");

elt.appendChild(newElt);
