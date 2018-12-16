var latinPhase = ["Carpe diem", "Veni, vidi, vici", "In vino veritas", "Felix culpa", "Vox nihili", "Sic semper tyrranis", "E pluribus unum", "Semper fidelis", "Ad nauseam", "Amor vincit omnia", "Barba non facit philosophum", "Cura te ipsum"];

var latinTrans = ["Seize the day", "I came, I saw, I conquered", "In wine there is truth (Please dont kick me out of SLUH I didn't make this joke.)", "Happy fault.", "Voice of nothing.", "Thus always to tyrants.", "Out of many, one", "Always faithful/loyal", " To nauseousness", "Love conquers all", "A beard does not make one a philosopher", "Take care of your own self"]

var number = Math.floor((Math.random() * 11) + 1);

var phrase = document.getElementById("first");

var trans = document.getElementById("second");

phrase.textContent = latinPhase[number];

trans.textContent = latinTrans[number];
