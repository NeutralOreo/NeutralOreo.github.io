
function makeObject(hm, vt, hmscr, vtrscr) {
  this.home = hm;
  this.visitor = vt;
  this.homeScore = hmscr;
  this.visitorScore = vtrscr;
  this.getSummary = function () {
    return [this.home, this.homeScore, this.visitor, this.visitorScore];
  };
  this.homeTeamVictory = function () {
    return (this.homeScore > this.visitorScore);
  }
}

function getRandom() {
  return (Math.floor(Math.random() * 20) + 70);
}

var objTest = new makeObject("test 1", "test 2", getRandom(), getRandom());
document.getElementById("first").textContent = objTest.getSummary();

var obj1 = new makeObject("Armadillos", "Bears", getRandom(), getRandom());
var obj2 = new makeObject("Cats", "Dogs", getRandom(), getRandom());
var obj3 = new makeObject("Eagles", "Ferrets", getRandom(), getRandom());
var obj4 = new makeObject("Geckos", "Horses", getRandom(), getRandom());
var obj5 = new makeObject("Iguanas", "Jackals", getRandom(), getRandom());
var obj6 = new makeObject("Kangaroos", "Lions", getRandom(), getRandom());

var array = new Array(obj1, obj2, obj3, obj4, obj5, obj6);

document.getElementById("first").textContent = array[0].getSummary();
document.getElementById("second").textContent = array[1].getSummary();
document.getElementById("third").textContent = array[2].getSummary();
document.getElementById("fourth").textContent = array[3].getSummary();
document.getElementById("fifth").textContent = array[4].getSummary();
document.getElementById("sixth").textContent = array[5].getSummary();
