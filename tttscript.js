var buttons = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //0 = not selected, 1 = X and 2= O
var user = 1;
var vinner = false;
var win = document.getElementById("winner");
var blueCount = 0;
var redCount = 0;

function select(knappnr) {
    var done = 0;
    if (vinner) {console.log("en vinner er allerede funnet"); return;}
    if (buttons[knappnr] != 0) {umulig();}
    if (buttons[knappnr] == 0) {
        oppdaterKnapp(user, knappnr);
        buttons[knappnr] = user;
        done = 1;
    }
    enVinner();
    if (done == 1) {changeUser(); done = 0;}
}
    
function changeUser() {
    if (user == 1) {user = 2; return;}
    if (user == 2) {user = 1; return;}
}
function umulig() {
    alert("umulig!");
}

function enVinner() {
    if (buttons[0] == buttons[1] && buttons[1] == buttons[2] && buttons[0] != 0) {vinn(); return;}
    if (buttons[3] == buttons[4] && buttons[4] == buttons[5] && buttons[3] != 0) {vinn(); return;}
    if (buttons[6] == buttons[7] && buttons[7] == buttons[8] && buttons[6] != 0) {vinn(); return;}
    if (buttons[0] == buttons[3] && buttons[3] == buttons[6] && buttons[0] != 0) {vinn(); return;}
    if (buttons[1] == buttons[4] && buttons[4] == buttons[7] && buttons[1] != 0) {vinn(); return;}
    if (buttons[2] == buttons[5] && buttons[5] == buttons[8] && buttons[2] != 0) {vinn(); return;}
    if (buttons[0] == buttons[4] && buttons[4] == buttons[8] && buttons[0] != 0) {vinn(); return;}
    if (buttons[2] == buttons[4] && buttons[4] == buttons[6] && buttons[2] != 0) {vinn(); return;}
    if (buttons.every(noWin)) {win.innerHTML = "IT IS A TIE! oh my... refresh for another go!"};
}

function noWin(x) {
    return x != 0;
}

function vinn() {
    var teksten = "";
    if (user == 1) {teksten += "BLUE PLAYER! in only " + blueCount + " moves!";}
    if (user == 2) {teksten += "RED PLAYER! in only " + redCount + " moves!";}
    win.innerHTML = teksten;
    vinner = true;
}

function oppdaterKnapp(brukernr, knappnr) {
    var oppdatert = document.getElementById(knappnr);
    if (brukernr == 1) {oppdatert.style.background = "blue"; blueCount++; return}
    if (brukernr == 2) {oppdatert.style.background = "red"; redCount++; return}
}
