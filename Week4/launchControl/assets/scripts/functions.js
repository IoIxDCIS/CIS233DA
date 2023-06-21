showTime();
let gasLevel = 0;

function getGas() {
    if(gasLevel == 0) {
        gasLevel = 1;
        document.getElementById("gas").src = "./assets/images/gas1.png";
        document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_1.png";
    } else if (gasLevel == 1) {
        gasLevel = 0;
        document.getElementById("gas").src = "./assets/images/gas0.png";
        document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_0.png";
    }
}

const levels = new Map();

function cycleImage(id) {
    if(levels[id] === undefined) {
        levels[id] = 0;
    }
    if(map[id] == 0) {
        map[id] = 1;
    } else if(map[id] == 1) {
        map[id] = 0;
    }
    document.getElementById(id).src = "./assets/images/"+id+""+map[id]+".png";
    document.getElementById(id).src = "./assets/images/bttn_"+id+"_"+map[id]+".png";
}
