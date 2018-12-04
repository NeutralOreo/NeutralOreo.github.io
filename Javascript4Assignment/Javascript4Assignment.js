var element1 = document.querySelector("h1.first").innerHTML= "<b><i>What is up you guys</i></b>";

var element2 = document.getElementsByTagName("li");
element2[0].parentNode.setAttribute("class", "third");

var newThing = document.createElement("li");
var textNode = document.createTextNode("Something here");
newThing.appendChild(textNode);
var parent = element2[0].parentNode;
parent.appendChild(newThing);
