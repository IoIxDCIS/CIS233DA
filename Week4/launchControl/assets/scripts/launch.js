let launchStatus = false;
let errorMessage = "";

function tryLaunch() {
    if (brakeLevel == 0 && tracLevel == 0 && gasLevel == 1 && battLevel == 1 && gearshiftStatus == 3) {
        document.getElementById("launch").src = "./assets/images/lca1.png";
        errorMessage = "";
        let audio = new Audio("./assets/media/launch.mp3");
        audio.play();
    } else {
        launchStatus = false;
        if(brakeLevel == 1) {
            errorMessage = "Parking brake must be disengaged."
        } else if (tracLevel == 1) {
            errorMessage = "Tracition control must be off."
        } else if (gasLevel == 0) {
            errorMessage = "You have no gas."
        } else if (battLevel == 0) {
            errorMessage = "Battery is discharged."
        } else if (gearshiftStatus != 3) {
            errorMessage = "Car must be in SPORT mode."
        }
        document.getElementById("launch").src = "./assets/images/lca0.png";
        let audio = new Audio("./assets/media/sputter.mp3");
        audio.play();
    }
    document.getElementById("msg").innerText = errorMessage;
}