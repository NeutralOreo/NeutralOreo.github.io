var textResponse = ["Welcome to the unofficial Latin IV Website!", "Latin IV privata site salvete!", "Welcome to the unofficial Latin IV Website!", "Quid est teum nomen?", "Te desideravi tantum!", "What's up???"];

var numResponse1 = Math.floor((Math.random() * 5) + 1);

var el = document.getElementById("first");

el.textContent = textResponse[numResponse1];
