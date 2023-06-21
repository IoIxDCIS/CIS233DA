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

let brakeLevel = 0;
function getBrake() {
    if(brakeLevel == 0) {
        brakeLevel = 1;
        document.getElementById("brake").src = "./assets/images/p0.png";
        document.getElementById("bttn_park").src = "./assets/images/bttn_park_0.png";
    } else if (brakeLevel == 1) {
        brakeLevel = 0;
        document.getElementById("brake").src = "./assets/images/p1.png";
        document.getElementById("bttn_park").src = "./assets/images/bttn_park_1.png";
    }
}

let tracLevel = 0;
function getTrac() {
    if(tracLevel == 0) {
        tracLevel = 1;
        document.getElementById("trac").src = "./assets/images/trac1.png";
        document.getElementById("bttn_trac").src = "./assets/images/bttn_trac_0.png";
    } else if (tracLevel == 1) {
        tracLevel = 0;
        document.getElementById("trac").src = "./assets/images/trac0.png";
        document.getElementById("bttn_trac").src = "./assets/images/bttn_trac_1.png";
    }
}

let battLevel = 0;
function getBatt() {
    if(battLevel == 0) {
        battLevel = 1;
        document.getElementById("batt").src = "./assets/images/batt1.png";
        document.getElementById("bttn_batt").src = "./assets/images/bttn_batt_1.png";
    } else {
        battLevel = 0;
        document.getElementById("batt").src = "./assets/images/batt0.png";
        document.getElementById("bttn_batt").src = "./assets/images/bttn_batt_0.png";
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