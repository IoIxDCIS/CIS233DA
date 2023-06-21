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
    if(levels[id] == 0) {
        levels[id] = 1;
    } else if(levels[id] == 1) {
        levels[id] = 0;
    }
    document.getElementById(id).src = "./assets/images/"+id+""+levels[id]+".png";
    document.getElementById(id).src = "./assets/images/bttn_"+id+"_"+levels[id]+".png";
}

let gearshiftStatus = 0;

let gearshiftIndicator = document.getElementById("mode");
let gearshiftIndicatorImage = document.getElementById('bttn_shifter');

function setMode() {
    switch(gearshiftStatus) {
        case 0:
            gearshiftStatus = 1;
            gearshiftIndicator.innerHTML = "ECO PRO";
            gearshiftIndicatorImage.style.position = "absolute";
            gearshiftIndicatorImage.style.top = "720px";
            break;
        case 1:
            gearshiftStatus = 2;
            gearshiftIndicator.innerHTML = "COMFORT";
            gearshiftIndicatorImage.style.position = "absolute";
            gearshiftIndicatorImage.style.top = "740px";
            break;
        case 2:
            gearshiftStatus = 3;
            gearshiftIndicator.innerHTML = "SPORT";
            gearshiftIndicatorImage.style.position = "absolute";
            gearshiftIndicatorImage.style.top = "760px";
            break;
        default:
            gearshiftStatus = 0;
            gearshiftIndicator.innerHTML = "PARK";
            gearshiftIndicatorImage.style.position = "absolute";
            gearshiftIndicatorImage.style.top = "700px";
            break;
    }
}