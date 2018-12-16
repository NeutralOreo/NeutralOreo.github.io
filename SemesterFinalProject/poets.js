var poet = {};

poet.name = "Full name: Publius Vergilius Maro";

poet.year = "Born: October 15, 70 BC; Died: September 21, 19 BC ";

poet.works = "Virgil responsible for writing works like the Aeneid, Eclogues, Georgics, and many assorted photos. His main work that brought him to fame was the Aeneid. It describes the journey of a man named Aeneas, whose objective is to found the Roman Empire.";

poet.biography = "Exerpt from Wikipedia: Virgil is traditionally ranked as one of Rome's greatest poets. His Aeneid has been considered the national epic of ancient Rome since the time of its composition. Modeled after Homers Iliad and Odyssey, the Aeneid follows the Trojan refugee Aeneas as he struggles to fulfill his destiny and reach Italy, where his descendants Romulus and Remus were to found the city of Rome. Virgils work has had wide and deep influence on Western literature, most notably Dante's Divine Comedy, in which Virgil appears as Dante's guide through Hell and Purgatory.";

poet.coolness = "Personally, I think that Vergil was a pretty cool guy. I like to think that the Aenead is like the Roman Odyssey! If I would have to give him a ratin from 1 to 10, he gets a strong 8 from me. Virgil, if you are reading this, I love your work, my guy. Keep doing what you're doing. You're doing great, dude!!!!"

var element1 = document.getElementById("first");
element1.textContent = poet.name;

var element2 = document.getElementById("second");
element2.textContent = poet.year;

var element3 = document.getElementById("third");
element3.textContent = poet.works;

var element4 = document.getElementById("fourth");
element4.textContent = poet.biography;

var element5 = document.getElementById("fifth");
element5.textContent = poet.coolness;
