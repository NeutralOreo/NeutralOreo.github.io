

var textResponse = ["If you can read this, then great, the program worked!", "If you can read this, then the same thing happened!", "If you can read this, then take a wild guess...", "Hey, can you read this? Great!", "This is filler to reach the Assignment requirements", "This is also filler and the sixth element", "wubbalubbadubdub"];

var numResponse1 = Math.floor((Math.random() * 6) + 1);

var numResponse2 = Math.floor((Math.random() * 6) + 1);

var numResponse3 = Math.floor((Math.random() * 6) + 1);

var numResponse4 = Math.floor((Math.random() * 6) + 1);

var el = document.getElementById("first");

el.textContent = textResponse[numResponse1];

var el = document.getElementById("second");

el.textContent = textResponse[numResponse2];

var el = document.getElementById("third");

el.textContent = textResponse[numResponse3];

var el = document.getElementById("fourth");

el.textContent = textResponse[numResponse4];
